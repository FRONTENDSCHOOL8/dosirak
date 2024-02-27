const HashTag = ({ className, children }) => {
  return (
    <li
      className={`rounded-xl border border-gray300 px-2 py-[3px] text-paragraph-sm text-gray50 ${className}`}
    >
      # {children}
    </li>
  );
};

export default HashTag;
