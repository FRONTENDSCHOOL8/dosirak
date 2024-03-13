import Tag from '@/components/atom/group/Tag';
import { useLoginUserInfo } from '@/hook';
import { pb } from '@/util';
import { useEffect } from 'react';
import { useState } from 'react';

const fetchRecentKeywords = async (userId) => {
  const userInfo = await pb.collection('users').getOne(userId);

  return userInfo.recent_keyword.split(',');
};

const fetchDeleteRecentKeyword = async (userId, target, setRecentKeywords) => {
  const userInfo = await pb.collection('users').getOne(userId);
  const currentKeywords = userInfo.recent_keyword;

  const nextKeywords = currentKeywords
    .split(',')
    .filter((v) => v != target)
    .join(',');

  const result = await pb.collection('users').update(userId, {
    recent_keyword: nextKeywords,
  });

  setRecentKeywords(nextKeywords.split(','));

  return result;
};

const fetchDeleteAllRecentKeyword = async (userId, setRecentKeywords) => {
  const result = await pb.collection('users').update(userId, {
    recent_keyword: '',
  });

  setRecentKeywords([]);

  return result;
};

const FeedRecentSearchArea = () => {
  const userInfo = useLoginUserInfo();
  const [recentKeywords, setRecentKeywords] = useState([]);

  useEffect(() => {
    fetchRecentKeywords(userInfo.id).then((data) => {
      setRecentKeywords(data);
    });
  }, []);

  const handleDeleteKeyword = (e) => {
    const target = e.target.previousSibling.innerText;
    fetchDeleteRecentKeyword(userInfo.id, target, setRecentKeywords);
  };

  const handleDeleteAllKeywords = (e) => {
    fetchDeleteAllRecentKeyword(userInfo.id, setRecentKeywords);
  };

  return (
    <section className="noto flex flex-col items-center px-8">
      <h2 className="sr-only">최근 검색어 영역</h2>
      <div className="mt-16 flex w-full justify-between">
        <h3 className="font-Gong-Gothic-l text-heading-sm">최근 검색어</h3>
        <button
          onClick={handleDeleteAllKeywords}
          type="button"
          className="text-paragraph-lg text-gray700"
        >
          전체삭제
        </button>
      </div>

      <ul className="mt-3 flex w-full flex-wrap gap-2">
        {recentKeywords.map((item, index) => (
          <Tag
            key={index}
            tagType="delete"
            deleteEvent={handleDeleteKeyword}
            customStyle="!text-paragraph-lg"
          >
            {item}
          </Tag>
        ))}
      </ul>
    </section>
  );
};

export default FeedRecentSearchArea;
