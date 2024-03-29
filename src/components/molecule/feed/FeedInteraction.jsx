import { ReactComponent as Comment } from '@/assets/common/comment.svg';
import ToggleButton from '@/components/atom/common/ToggleButton';
import { useLoginUserInfo } from '@/hook';
import useFeedStore from '@/store/useFeedStore';
import { pb } from '@/util';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const fetchInteraction = async (feedId, data) => {
  const result = await pb.collection('feed').update(feedId, data);
  return result;
};

const FeedInteraction = ({ feed }) => {
  const { setCommentView } = useFeedStore((state) => state);
  const { feedType, keyword } = useParams();
  const [currentBookmark, setCurrentBookmark] = useState(feed.bookmark);
  const [currentLikeIt, setCurrentLikeIt] = useState(feed.like);
  const userInfo = useLoginUserInfo();

  const handleOpenCommentWindow = () => {
    setCommentView(feed.id);
  };

  const handleBookmark = () => {
    const nextBookmark = currentBookmark.includes(userInfo.id)
      ? currentBookmark.filter((v) => v != userInfo.id)
      : [...currentBookmark, userInfo.id];

    setCurrentBookmark(nextBookmark);

    const data = {
      bookmark: nextBookmark,
    };

    fetchInteraction(feed.id, data);
  };

  const handleLikeIt = () => {
    const nextLikeIt = currentLikeIt.includes(userInfo.id)
      ? currentLikeIt.filter((v) => v != userInfo.id)
      : [...currentLikeIt, userInfo.id];

    setCurrentLikeIt(nextLikeIt);

    const data = {
      like: nextLikeIt,
    };

    fetchInteraction(feed.id, data);
  };

  return (
    <section className="flex justify-between border-b-[0.8px] border-gray300 pb-4">
      <h2 className="sr-only">인터렉션 영역</h2>
      <div className="flex items-center gap-3">
        <Link
          to={`/feed/${feedType ? feedType : `search/${keyword}`}/comment/${feed.id}`}
          onClick={handleOpenCommentWindow}
        >
          <Comment />
        </Link>
        <ToggleButton
          onClickButton={handleLikeIt}
          type="heart"
          alt="좋아요"
          colorType="black"
          isClicked={currentLikeIt.includes(userInfo.id)}
        />
        <span className='select-none rounded-lg bg-[url("@/assets/common/likeinfo.svg")] bg-cover bg-no-repeat py-1.5 pe-3 ps-5 text-paragraph-base'>
          {currentLikeIt.length}명이 좋아합니다.
        </span>
      </div>
      <ToggleButton
        onClickButton={handleBookmark}
        type="bookmark"
        alt="북마크"
        isClicked={currentBookmark.includes(userInfo.id)}
      />
    </section>
  );
};

export default FeedInteraction;
