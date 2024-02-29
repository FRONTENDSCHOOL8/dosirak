import TitleText from '@/components/atom/common/TitleText';
import GroupListCard from './GroupListCard';

const GroupList = () => {
  return (
    <section>
      <TitleText>이런 모임 어때요?</TitleText>
      <ul>
        <GroupListCard />
      </ul>
    </section>
  );
};

export default GroupList;
