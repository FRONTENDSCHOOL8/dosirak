import Spinner from '@/components/atom/common/Spinner';
import NoContents from '@/components/atom/common/NoContents';
import MainNavBar from '@/components/molecule/common/MainNavBar';
import NavBar from '@/components/molecule/navbar/NavBar';
import FeedCard from '@/components/organism/feed/FeedCard';
import MyFeed from '@/components/organism/feed/myfeed/MyFeed';
import { useInterSectionObserver, useLoginUserInfo } from '@/hook';
import { getPbImage, pb } from '@/util';
import { getPbImageArray } from '@/util/getPbImage';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useLayoutEffect } from 'react';
import { useRef, useEffect } from 'react';
import {
  useParams,
  Outlet,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
import FeedCommonHeader from '@/components/molecule/feed/FeedCommonHeader';
import { useNavigate } from 'react-router-dom';

const INITIAL_PAGE = 1;
const PER_PAGE = 10;

export const Component = () => {
  const userInfo = useLoginUserInfo();
  const navigate = useNavigate();
  const loadedFeedsData = useLoaderData();
  const { keyword } = useParams();
  const queryOptions = setQueryOptions(keyword);

  const {
    data: cachedFeedsData,
    hasNextPage,
    fetchNextPage,
    refetch,
    status,
  } = useInfiniteQuery({
    ...queryOptions,
    initialData: loadedFeedsData,
    staleTime: 1000 * 5,
  });

  const handleBack = () => {
    navigate('/feed/search', { replace: true });
  };

  const feedsData = cachedFeedsData ? cachedFeedsData.pages : [];
  const feedItems = feedsData
    .map((feedsData) => feedsData.items)
    .flatMap((feedItems) => feedItems);

  const [observe, unobserve] = useInterSectionObserver(fetchNextPage);
  const observeTarget = useRef(null);

  useEffect(() => {
    if (hasNextPage) observe(observeTarget.current);
    // else unobserve(observeTarget.current);
  }, [feedItems.length]);

  useEffect(() => {
    refetch();
  }, [userInfo.follow.length]);

  return status === 'loading' ? (
    <Spinner textArray={['탕수육 만드는중...', '레시피 찾는중...']} />
  ) : (
    <>
      <section className="relative flex h-fit min-h-screen flex-col">
        <h1 className="sr-only">피드 검색 결과</h1>
        <header>
          <FeedCommonHeader handleBack={handleBack}>
            <strong className="flex-grow select-none text-center font-Gong-Gothic-l text-heading-sm ">
              {keyword} 검색 결과
            </strong>
          </FeedCommonHeader>
        </header>
        <section className="h-fit pt-[132px]">
          <ul className="flex flex-col gap-8 px-9 pb-[125px]">
            {feedItems.length ? (
              feedItems.map((feed) => (
                <FeedCard feed={feed} key={feed.id} refetch={refetch} />
              ))
            ) : (
              <NoContents type="noResult" />
            )}
            <li ref={observeTarget}>&nbsp;</li>
          </ul>
        </section>
        <Outlet />
      </section>
      <MainNavBar />
    </>
  );
};

const fetchFeeds = (keyword) => async (pageInfo) => {
  const feeds = await pb
    .collection('feed')
    .getList(pageInfo.pageParam, PER_PAGE, {
      sort: `-created`,
      expand: 'writer, writer.follower, like, bookmark',
      filter: `title ~ "${keyword}" || maintext ~ "${keyword}"`,
    });

  const feedItems = feeds.items.map((feed) => {
    const imageURLArray = getPbImageArray(feed);
    const writerThumbnail = getPbImage(feed.expand.writer);
    feed.images = imageURLArray;
    feed.expand.writer.thumbnail = writerThumbnail;

    return feed;
  });

  return {
    ...feeds,
    items: feedItems,
  };
};

const setQueryOptions = (keyword) => ({
  queryKey: ['feed', keyword],
  queryFn: fetchFeeds(keyword),
  initialPageParam: INITIAL_PAGE,
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.page < lastPage.totalPages ? allPages.length + 1 : null;
  },
});

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { keyword } = params;

    const sessionUser = JSON.parse(sessionStorage.getItem('loginUserInfo'))
      .state.loginUser;
    const rememberUser = JSON.parse(localStorage.getItem('loginUserInfo')).state
      .loginUser;

    let currentUserId;
    if (sessionUser.length) {
      currentUserId = sessionUser.id;
    } else {
      currentUserId = rememberUser.id;
    }

    let feedsData = null;
    const cachedFeedsData = queryClient.getQueryData(['feed', keyword]);
    const queryOptions = setQueryOptions(keyword, currentUserId);

    // 캐싱된 피드 데이터가 있을 경우
    if (cachedFeedsData) {
      feedsData = cachedFeedsData;
    }
    // 캐싱된 피드 데이터가 없을 경우
    else {
      feedsData = await queryClient.fetchInfiniteQuery(queryOptions);
    }

    return feedsData;
  };

Component.displayName = 'FeedSearchResult';
