import { useState } from 'react';
import ParticipateInfo from './ParticipateInfo';
import { useEffect } from 'react';
import { pb } from '@/util';
import { useLoginUserInfo } from '@/hook';

const INITIAL_COUNT = { group: 0, feed: 0 }; //1-1

const fetchCount = async (userId) => {
  //4
  const feedData = await pb.collection('feed').getList(1, 100, {
    //5
    filter: `writer.id ?= "${userId}"`, //7
  });

  return feedData.items.length; //8
};

const RandomRecipe = () => {
  const [count, setCount] = useState(INITIAL_COUNT); //1-2
  const userInfo = useLoginUserInfo(); //6
  useEffect(() => {
    //3
    fetchCount(userInfo.id).then((data) => {
      //9
      setCount({ ...count, feed: data }); //10
    });
  }, []);

  return (
    <section className="mt-[13px] flex">
      {/* 2 */}
      <ParticipateInfo number={count.group}>모임</ParticipateInfo>
      <ParticipateInfo number={count.feed}>피드</ParticipateInfo>
    </section>
  );
};

export default RandomRecipe;
