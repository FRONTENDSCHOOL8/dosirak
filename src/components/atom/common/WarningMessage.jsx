const WarningMessage = ({ children }) => {
  return (
    <span className="noto absolute -bottom-5 text-paragraph-base font-bold text-red-500">
      {children}
    </span>
  );
};

export default WarningMessage;
