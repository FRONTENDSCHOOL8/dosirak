import { useState } from 'react';
import ParticipateInfo from './ParticipateInfo';
import { useEffect } from 'react';
import { pb } from '@/util';
import { useLoginUserInfo } from '@/hook';

const INITIAL_COUNT = { groupCount: 0, feedCount: 0 };

const fetchCount = async (userId) => {
  const feedData = await pb.collection('feed').getList(1, 100, {
    filter: `writer.id ?= "${userId}"`,
  });

  const groupData = await pb.collection('groups').getList(1, 100, {
    filter: `participant.id ?= "${userId}"`,
  });

  return {
    feedCount: feedData.items.length,
    groupCount: groupData.items.length,
  };
};

const ParticipateBox = () => {
  const [count, setCount] = useState(INITIAL_COUNT);
  const userInfo = useLoginUserInfo();
  useEffect(() => {
    fetchCount(userInfo.id).then((data) => {
      setCount(data);
    });
  }, []);

  return (
    <section className="mt-4 flex justify-between">
      <ParticipateInfo number={count.groupCount}>모임</ParticipateInfo>
      <ParticipateInfo number={count.feedCount}>피드</ParticipateInfo>
    </section>
  );
};

export default ParticipateBox;