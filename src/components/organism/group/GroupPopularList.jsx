import TitleText from '@/components/atom/common/TitleText';
import GroupPopularCard from '@/components/molecule/group/GroupPopularCard';

const GroupPopularList = () => {
  return (
    <section>
      <TitleText className>지금 가장 인기있어요!</TitleText>
      <ul className="flex flex-nowrap gap-5">
        <GroupPopularCard />
        <GroupPopularCard />
        <GroupPopularCard />
      </ul>
    </section>
  );
};

export default GroupPopularList;
