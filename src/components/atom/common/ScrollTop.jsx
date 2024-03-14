const ScrollTop = () => {
  const handleScrollTop = (e) => {
    e.preventDefault();
    if (!window.scrollY) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button
      type="button"
      onClick={handleScrollTop}
      className="noto fixed bottom-[125px] z-[9999] translate-x-[350px]"
    >
      <img src="/assets/common/scrollTop.svg" alt="맨 위로 이동" />
    </button>
  );
};

export default ScrollTop;
