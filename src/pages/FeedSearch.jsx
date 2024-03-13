import MainNavBar from '@/components/molecule/common/MainNavBar';
import FeedCommonHeader from '@/components/molecule/feed/FeedCommonHeader';
import { useLoginUserInfo } from '@/hook';
import { pb } from '@/util';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tag from '@/components/atom/group/Tag';
import FeedSearchArea from '@/components/molecule/feed/FeedSearchArea';
import FeedRecentSearchArea from '@/components/molecule/feed/FeedRecentSearchArea';
import FeedRecommendSearchArea from '@/components/molecule/feed/FeedRecommendSearchArea';

export const Component = () => {
  const userInfo = useLoginUserInfo();
  const navigate = useNavigate();
  const searchFormRef = useRef(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleFeedSearch = (e) => {
    e.preventDefault();
    console.log('search');
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
          <FeedSearchArea />
          <FeedRecentSearchArea />
          <FeedRecommendSearchArea />
        </form>
      </section>
      <MainNavBar />
    </>
  );
};

Component.displayName = 'FeedSearch';
