import { ReactComponent as Eye } from '@/assets/register/eye.svg';
import { debounce } from '@/util';

const displayButton = (buttonType) => {
  switch (buttonType) {
    case 'duplicate':
      return (
        <button
          type="button"
          className="absolute bottom-2 right-0 w-[83px] rounded-2xl bg-primary-color px-2 py-1 text-paragraph-lg text-white"
        >
          중복 확인
        </button>
      );
    case 'password':
      return (
        <button type="button" className="absolute bottom-2 right-0">
          <Eye />
        </button>
      );
    case 'requestAuth':
      return (
        <button
          type="button"
          className="absolute bottom-2 right-0 w-[83px] rounded-2xl bg-primary-color px-2 py-1 text-paragraph-lg text-white"
        >
          인증 요청
        </button>
      );
    case 'auth':
      return (
        <button
          type="button"
          className="absolute bottom-2 right-0 w-[83px] rounded-2xl border-[1px] border-primary-color bg-white px-2 py-1 text-paragraph-lg text-primary-color"
        >
          확인
        </button>
      );
  }
};

const FormInput = ({
  category,
  children,
  hasButton,
  buttonType,
  value,
  updater,
}) => {
  return (
    <div className={`${hasButton && 'relative'} flex flex-col gap-2`}>
      <label
        htmlFor={category}
        className="noto px-1 text-label text-primary-color"
      >
        {children}
      </label>
      <input
        type={
          category === 'password' || category === 'confirm'
            ? 'password'
            : 'text'
        }
        id={category}
        defaultValue={value}
        onChange={debounce(updater)}
        placeholder={`${children} 입력`}
        className="h-8 w-full border-b-2 border-gray300 px-1 text-paragraph-base outline-none focus:border-primary-color"
      />
      {hasButton && displayButton(buttonType)}
    </div>
  );
};

{
  /* <div className="relative flex flex-col gap-2">
  <label htmlFor="id" className="noto px-1 text-label text-primary-color">
    아이디
  </label>
  <input
    type="text"
    id="id"
    placeholder="아이디 입력"
    className="h-8 w-full border-b-2 border-gray300 px-1 text-paragraph-base outline-none focus:border-primary-color"
  />
  <button
    type="button"
    className="absolute bottom-2 right-0 w-[83px] rounded-2xl bg-primary-color px-2 py-1 text-paragraph-lg text-white"
  >
    중복 확인
  </button>
</div> */
}

export default FormInput;
