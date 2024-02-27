import Tag from '../../atom/group/Tag';
import HashTag from '../../atom/group/HashTag';
import HeartButton from '../../atom/common/HeartButton';
import SubInfo from '@/components/atom/common/SubInfo';

const GroupPopularCard = () => {
  // 상태관리 필요 (일단 임의로 작성)
  const hashTagArr = ['밀프렙', '소통해요'];
  const hashTagList = hashTagArr?.map((tag, i) => (
    <HashTag key={i}>{tag}</HashTag>
  ));
  const recruitStatus = '모집 중';
  const groupName = '매일매일 도시락';
  const uploadTime = 3;
  const peopleNum = 118;
  const likeNum = 42;

  return (
    <li className="relative h-[280px] w-[280px] shrink-0 overflow-hidden rounded-2xl bg-gray500 shadow-card">
      <div className="absolute">
        {/* <img src="../src/assets/test.jpg" alt="" /> */}
      </div>
      <div className="relative px-5 pt-[22px]">
        <Tag>{recruitStatus}</Tag>
        <HeartButton
          initialType={'false-white'}
          className={'absolute right-5 z-10'}
        />
        <ul className="relative top-[140px] z-10 flex gap-[6px]">
          {hashTagList}
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 z-10 h-[80px] w-[280px] bg-white px-5 pb-5 pt-[18px]">
        <h3 className="text-content font-Gong-Gothic-l text-content-color">
          {groupName}
        </h3>
        <div className="mt-[6px] flex items-center justify-between">
          <SubInfo svg={'group/clock'} svgAlt={'시계'}>
            {uploadTime}시간 전
          </SubInfo>
          <div className="flex gap-3">
            <SubInfo svg={'group/person'} svgAlt={'모임 참여인원'}>
              {peopleNum}
            </SubInfo>
            <SubInfo svg={'common/heart-true'} svgAlt={'좋아요 수'}>
              {likeNum}
            </SubInfo>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full bg-card-group-gradient"></div>
    </li>
  );
};

export default GroupPopularCard;
