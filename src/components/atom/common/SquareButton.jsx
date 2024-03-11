const SquareButton = ({ children }) => {
  return (
    <button className="noto h-12 w-full rounded-[5px] bg-primary-color text-label text-white">
      {children}
    </button>
  );
};

export default SquareButton;
