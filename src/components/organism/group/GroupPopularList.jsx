import TitleText from '@/components/atom/common/TitleText';
import GroupPopularCard from '@/components/organism/group/GroupPopularCard';

const GroupPopularList = () => {
  return (
    <section>
      <TitleText>지금 가장 인기있어요!</TitleText>
      <ul className="mt-5 flex flex-nowrap gap-5">
        <GroupPopularCard />
        <GroupPopularCard />
        <GroupPopularCard />
      </ul>
    </section>
  );
};

export default GroupPopularList;
