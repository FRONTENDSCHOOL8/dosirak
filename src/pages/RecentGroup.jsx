import TitleText from '@/components/atom/common/TitleText';
import GroupListCard from '@/components/organism/group/GroupListCard';

const RecentGroup = ({ groupItems }) => {
  return (
    <section className="mb-12 mt-[144px]">
      <TitleText>따끈따끈 신규 모임</TitleText>
      <ul className="mt-5 flex flex-col gap-4">
        {groupItems.map((group) => (
          <GroupListCard key={group.id} group={group} />
        ))}
      </ul>
    </section>
  );
};

export default RecentGroup;
