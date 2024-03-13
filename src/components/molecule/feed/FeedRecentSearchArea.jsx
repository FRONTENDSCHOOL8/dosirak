import Tag from '@/components/atom/group/Tag';

const FeedRecentSearchArea = () => {
  return (
    <section className="noto flex flex-col items-center px-8">
      <h2 className="sr-only">최근 검색어 영역</h2>
      <div className="mt-16 flex w-full justify-between">
        <h3 className="font-Gong-Gothic-l text-heading-sm">최근 검색어</h3>
        <button type="button" className="text-paragraph-lg text-gray700">
          전체삭제
        </button>
      </div>

      <ul className="mt-3 flex w-full flex-wrap gap-2">
        <Tag tagType="delete" customStyle="!text-paragraph-lg">
          오므라이스
        </Tag>
        <Tag tagType="delete" customStyle="!text-paragraph-lg">
          계란
        </Tag>
        <Tag tagType="delete" customStyle="!text-paragraph-lg">
          간단한
        </Tag>
        <Tag tagType="delete" customStyle="!text-paragraph-lg">
          매콤한
        </Tag>
        <Tag tagType="delete" customStyle="!text-paragraph-lg">
          오므라이스
        </Tag>
      </ul>
    </section>
  );
};

export default FeedRecentSearchArea;
