import Tag from '@/components/atom/group/Tag';
import { useLoginUserInfo } from '@/hook';

const FeedRecommendSearchArea = () => {
  const userInfo = useLoginUserInfo();

  return (
    <section className="noto flex flex-col items-center px-8">
      <h2 className="sr-only">추천 검색어 영역</h2>
      <div className="mt-16 flex w-full justify-between">
        <h3 className="font-Gong-Gothic-l text-heading-sm">
          {userInfo.nickname}님, 이 주제들은 어때요?
        </h3>
      </div>
      <ul className="mt-3 flex w-full flex-wrap gap-2">
        <Tag customStyle="!border-secondary-color !text-secondary-color !text-paragraph-lg">
          오므라이스
        </Tag>
        <Tag customStyle="!border-secondary-color !text-secondary-color !text-paragraph-lg">
          계란
        </Tag>
        <Tag customStyle="!border-secondary-color !text-secondary-color !text-paragraph-lg">
          간단한
        </Tag>
        <Tag customStyle="!border-secondary-color !text-secondary-color !text-paragraph-lg">
          매콤한
        </Tag>
      </ul>
    </section>
  );
};

export default FeedRecommendSearchArea;
