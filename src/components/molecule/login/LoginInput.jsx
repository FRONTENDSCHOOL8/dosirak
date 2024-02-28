const LoginInput = ({ children, name, ...restProps }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="noto text-label">
        {children}
      </label>
      <input
        name={name}
        id={name}
        className="noto h-11 w-full rounded-[5px] border-2 border-gray300 px-3 text-paragraph-base outline-none focus:border-primary-color"
        {...restProps}
      />
    </div>
  );
};

export default LoginInput;
