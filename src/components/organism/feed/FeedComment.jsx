import CommentWindowHeader from '@/components/molecule/feed/CommentWindowHeader';
import Comments from '@/components/molecule/feed/Comments';
import NotFoundComment from '@/components/atom/feed/NotFoundComment';
import CommentWrite from '@/components/molecule/feed/CommentWrite';
import useFeedStore from '@/store/useFeedStore';
import { getPbImage, pb } from '@/util';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState, useLayoutEffect } from 'react';
import { useParams, useNavigate, useLoaderData } from 'react-router-dom';
import { THUMBNAIL_IMAGE_EXT } from '@/util/constant';

const INITIAL_PAGE = 1;
const PER_PAGE = 10;

export const Component = () => {
  const loadedCommentsData = useLoaderData();
  const setCommentView = useFeedStore((state) => state.setCommentView);
  const [commentBoxStyle, setCommentBoxStyle] = useState({
    height: '300px',
    overflow: 'hidden',
  });
  const navigate = useNavigate();
  const { feedId, feedType, keyword } = useParams();

  const {
    data: cachedCommentsData,
    hasNextPage,
    fetchNextPage,
    isRefetching,
    refetch,
  } = useInfiniteQuery({
    ...queryOptions(feedId),
    initialData: loadedCommentsData,
  });

  const commentsData = cachedCommentsData ? cachedCommentsData.pages : [];
  const commentItems = commentsData
    .map((commentsData) => commentsData.items)
    .flatMap((commentItems) => commentItems);

  useLayoutEffect(() => {
    const timer = setTimeout(
      setCommentBoxStyle({
        maxHeight: '70vh',
        height: '609px',
        transition: 'height ease-in-out .2s',
      }),
      200
    );

    return () => clearTimeout(timer);
  }, []);

  const handleCommentClose = (e) => {
    if (e.target.closest('.comment-window')) return;

    navigate(`/feed/${feedType ? feedType : `search/${keyword}`}`, {
      replace: true,
    });
    setCommentView('');
  };

  return (
    <section
      onClick={handleCommentClose}
      className="fixed top-0 z-30 flex size-full max-w-[430px] flex-shrink-0 items-end bg-[rgba(0,0,0,0.45)] px-3"
    >
      <h2 className="sr-only">피드 댓글</h2>
      <div
        style={commentBoxStyle}
        className="comment-window flex w-full flex-col rounded-se-[3rem] rounded-ss-[3rem] bg-white px-6"
      >
        <CommentWindowHeader />
        {commentItems.length ? (
          <Comments
            comments={commentItems}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isRefetching={isRefetching}
            refetch={refetch}
          />
        ) : (
          <NotFoundComment />
        )}
        <div className="h-[124px] border-t-2 pt-5">
          <CommentWrite
            comments={commentItems}
            feed={feedId}
            onComment={refetch}
          />
        </div>
      </div>
    </section>
  );
};

const fetchFeedComments = (feedId) => async (pageInfo) => {
  const comments = await pb
    .collection('feed_comments')
    .getList(pageInfo.pageParam, PER_PAGE, {
      sort: 'like, created',
      expand: 'commenter',
      filter: `parent_feed="${feedId}"`,
    });

  const commentItems = comments.items.map((comment) => {
    const commenterThumbnail = getPbImage(comment.expand.commenter);
    const thumbnailExt = commenterThumbnail.split('.')?.pop();

    if (THUMBNAIL_IMAGE_EXT.includes(thumbnailExt.toLowerCase())) {
      comment.expand.commenter.thumbnail = commenterThumbnail;
    } else {
      comment.expand.commenter.thumbnail = `${window.location.origin}/assets/common/guest.svg`;
    }

    return comment;
  });

  return {
    ...comments,
    items: commentItems,
  };
};

const queryOptions = (feedId) => ({
  queryKey: ['feedComment', feedId],
  queryFn: fetchFeedComments(feedId),
  initialPageParam: INITIAL_PAGE,
  getNextPageParam: (lastPage, allPages) => {
    const hasNextPage = lastPage.page < lastPage.totalPages;
    const nextPageIndex = allPages.length + 1;

    if (hasNextPage) {
      return nextPageIndex;
    } else {
      const prevLastPage = allPages[allPages.length - 1];
      const prevItemsCount = prevLastPage.items.length;
      const nextItemsCount = lastPage.items.length;

      if (prevItemsCount !== nextItemsCount) {
        return true;
      }
      return null;
    }
  },
});

export const loader =
  (queryClient) =>
  async ({ params }) => {
    let commentsData = null;
    const { feedId } = params;
    const cachedCommentsData = queryClient.getQueryData(['feed', feedId]);

    if (cachedCommentsData) {
      commentsData = cachedCommentsData;
    } else {
      commentsData = await queryClient.fetchInfiniteQuery(queryOptions(feedId));
    }

    return commentsData;
  };

Component.displayName = 'FeedComment';
