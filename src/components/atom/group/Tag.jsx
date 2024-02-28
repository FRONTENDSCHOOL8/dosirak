const Tag = ({ className, children }) => {
  return (
    <span
      className={`absolute z-10 rounded-2xl bg-content-color px-3 py-[5px] text-paragraph-base text-white ${className}`}
    >
      {children}
    </span>
  );
};

export default Tag;
