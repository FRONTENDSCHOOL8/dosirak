import { debounce } from '@/util';

const LoginInput = ({ children, name, updater, value, ...restProps }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="noto text-label">
        {children}
      </label>
      <input
        name={name}
        id={name}
        className="noto h-11 w-full rounded-[5px] border-2 border-gray300 px-3 text-paragraph-lg outline-none focus:border-primary-color"
        {...restProps}
        onChange={debounce(updater, 100)}
        defaultValue={value}
      />
    </div>
  );
};

export default LoginInput;
