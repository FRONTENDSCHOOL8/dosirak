import SubInfo from '@/components/atom/common/SubInfo';

const GroupInfo = ({ uploadTime, peopleNum, likeNum, position }) => {
  return (
    <div className={`${position} flex items-center justify-between`}>
      <div className="flex gap-3">
        <SubInfo svg="group/person" svgAlt="모임 참여인원">
          {peopleNum}
        </SubInfo>
        <SubInfo svg="common/whiteheart-true" svgAlt="좋아요 수">
          {likeNum}
        </SubInfo>
      </div>
      <SubInfo svg="group/clock" svgAlt="시계">
        {uploadTime}시간 전
      </SubInfo>
    </div>
  );
};

export default GroupInfo;
