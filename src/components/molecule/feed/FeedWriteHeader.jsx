const FeedWriteHeader = ({ handleBack }) => {
  return (
    <header className="fixed top-0 z-10 w-[430px] bg-white shadow-[0_4px_4px_0_rgba(204,204,204,0.25)] mobile:w-full">
      <div className="relative flex h-20 items-center gap-3 px-6">
        <button type="button" onClick={handleBack} className="absolute left-6">
          <img src="/assets/common/prev.svg" alt="뒤로 가기" />
        </button>
        <span className="noto flex-grow text-center text-heading-sm font-semibold">
          피드 쓰기
        </span>
        <button
          type="submit"
          className="noto absolute right-4 rounded-full bg-black px-3 py-[5px] text-paragraph-lg text-white"
        >
          업로드
        </button>
      </div>
    </header>
  );
};

export default FeedWriteHeader;
