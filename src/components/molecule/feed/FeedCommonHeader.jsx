const FeedCommonHeader = ({ handleBack, children }) => {
  return (
    <header className="fixed top-0 z-10 w-[430px] bg-white shadow-[0_4px_4px_0_rgba(204,204,204,0.25)] mobile:w-full">
      <div className="relative flex h-20 items-center gap-3 px-6">
        <button type="button" onClick={handleBack} className="absolute left-6">
          <img src="/assets/common/prev.svg" alt="뒤로 가기" />
        </button>
        {children}
      </div>
    </header>
  );
};

export default FeedCommonHeader;
