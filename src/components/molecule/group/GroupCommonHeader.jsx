const GroupCommonHeader = ({ handleBack, children }) => {
  return (
    <header className="shadow-[0_4px_4px_0_rgba(204,204,204,0.25) absolute left-0 top-0 z-10 w-full bg-white">
      <div className="relative flex h-20 items-center gap-3 px-6">
        <button type="button" onClick={handleBack} className="absolute left-6">
          <img src="/assets/common/prev.svg" alt="뒤로 가기" />
        </button>
        {children}
      </div>
    </header>
  );
};

export default GroupCommonHeader;
