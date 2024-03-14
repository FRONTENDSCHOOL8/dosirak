import MainNavBar from '@/components/molecule/common/MainNavBar';
import FeedCommonHeader from '@/components/molecule/feed/FeedCommonHeader';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeedSearchArea from '@/components/molecule/feed/FeedSearchArea';
import FeedRecentSearchArea from '@/components/molecule/feed/FeedRecentSearchArea';
import FeedRecommendSearchArea from '@/components/molecule/feed/FeedRecommendSearchArea';
import { useLoginUserInfo } from '@/hook';
import { pb } from '@/util';

const fetchRecentKeywordUpdate = async (userId, searchValue) => {
  const prevKeywords = await pb.collection('users').getOne(userId);

  const nextKeywordsTemp = `${prevKeywords.recent_keyword},${searchValue}`;
  const nextKeywords = new Set(nextKeywordsTemp.split(','));

  const result = await pb.collection('users').update(userId, {
    recent_keyword: Array.from(nextKeywords).join(','),
  });

  return result;
};

export const Component = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const searchFormRef = useRef(null);
  const userInfo = useLoginUserInfo();

  const handleBack = () => {
    navigate('/feed/popular', { replace: true });
  };

  const handleFeedSearch = (e) => {
    e.preventDefault();
    fetchRecentKeywordUpdate(userInfo.id, searchValue);
    navigate(`/feed/search/${searchValue}`);
  };

  const handleSearchRecentKeyword = (e) => {
    const target = e.target.innerText;
    navigate(`/feed/search/${target}`);
  };

  return (
    <>
      <section className="relative flex min-h-screen flex-col pb-[95px] pt-20">
        <h1 className="sr-only">피드 검색</h1>
        <form
          onSubmit={handleFeedSearch}
          ref={searchFormRef}
          className="h-full pb-8"
        >
          <FeedCommonHeader handleBack={handleBack}>
            <strong className="flex-grow select-none text-center font-Gong-Gothic-l text-heading-sm ">
              검색
            </strong>
          </FeedCommonHeader>
          <FeedSearchArea
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <FeedRecentSearchArea
            handleSearchRecentKeyword={handleSearchRecentKeyword}
          />
          <FeedRecommendSearchArea />
        </form>
      </section>
      <MainNavBar />
    </>
  );
};

Component.displayName = 'FeedSearch';
