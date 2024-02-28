const CheckButton = ({ disabled, onClick, children }) => {
  return (
    <button
      type="button"
      className="noto absolute bottom-0.5 right-0 w-[85px] rounded-2xl border-[1px] border-primary-color bg-primary-color px-2 py-0.5 text-paragraph-lg text-white disabled:bg-white disabled:text-primary-color"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CheckButton;
