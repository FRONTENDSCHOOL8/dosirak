import TitleText from '@/components/atom/common/TitleText';
import GroupListCard from '@/components/organism/group/GroupListCard';
import GroupPopularCard from '@/components/organism/group/GroupPopularCard';

const PopularGroup = ({ likeData, participateData }) => {
  return (
    <>
      <section className="mt-[144px]">
        <TitleText>지금 가장 인기있어요!</TitleText>
        <ul className="mt-5 flex flex-nowrap gap-5">
          {likeData &&
            likeData.map((group) => (
              <GroupPopularCard key={group.id} group={group} />
            ))}
        </ul>
      </section>
      <section className="mb-32 mt-16">
        <TitleText>이런 모임 어때요?</TitleText>
        <ul className="mt-5 flex flex-col gap-4">
          {participateData.map((group) => (
            <GroupListCard key={group.id} group={group} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default PopularGroup;
