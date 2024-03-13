const FeedSearchArea = () => {
  return (
    <section className="flex flex-col items-center px-8">
      <h2 className="sr-only">검색 영역</h2>
      <div className="relative mt-16 flex w-full flex-col gap-8">
        <label
          htmlFor="search"
          className="select-none font-Gong-Gothic-m text-heading-lg"
        >
          어떤 레시피를 찾아볼까요?
        </label>
        <input
          type="search"
          className="noto w-[calc(100%_-_30px)] border-b-[3px] border-b-primary-color p-2 outline-none focus:border-b-secondary-color"
          placeholder="검색어를 입력해주세요"
          id="search"
          name="search"
        />
        <button type="submit" className="absolute bottom-2 right-1 select-none">
          <img src="/assets/feed/search.svg" alt="검색" />
        </button>
      </div>
    </section>
  );
};

export default FeedSearchArea;
