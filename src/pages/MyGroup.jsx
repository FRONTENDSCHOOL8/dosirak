import TitleText from '@/components/atom/common/TitleText';
import MyGroupCard from '@/components/organism/group/MyGroupCard';
import { useLoginUserInfo } from '@/hook';

const MyGroup = ({ groupItems }) => {
  const userInfo = useLoginUserInfo();

  return (
    <section className="mt-[144px]">
      <TitleText>{userInfo.nickname}님이 참여 중인 모임이에요</TitleText>
      <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-7">
        {groupItems.map((group) => (
          <MyGroupCard key={group.id} group={group} />
        ))}
      </ul>
    </section>
  );
};

export default MyGroup;
