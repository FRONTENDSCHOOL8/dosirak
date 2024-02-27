import { ReactComponent as Eye } from '@/assets/register/eye.svg';
import WarningMessage from '@/components/atom/common/WarningMessage';
import { debounce } from '@/util';

const displayButton = (buttonType, validation, buttonEvent) => {
  switch (buttonType) {
    case 'duplicate':
      return (
        <button
          type="button"
          className="absolute bottom-1 right-0 w-[85px] rounded-2xl bg-primary-color px-2 py-1 text-paragraph-lg text-white disabled:bg-gray500"
        >
          중복 확인
        </button>
      );
    case 'password':
      return (
        <button type="button" className="absolute bottom-1 right-0">
          <Eye />
        </button>
      );
    case 'requestAuth':
      return (
        <button
          type="button"
          className="absolute bottom-0.5 right-0 w-[85px] rounded-2xl border-[1px] border-primary-color bg-primary-color px-2 py-0.5 text-paragraph-lg text-white disabled:bg-white disabled:text-primary-color"
          disabled={validation}
          onClick={buttonEvent}
        >
          인증 요청
        </button>
      );
    case 'auth':
      return (
        <button
          type="button"
          className="absolute bottom-0.5 right-0 w-[85px] rounded-2xl border-[1px] border-primary-color bg-primary-color px-2 py-0.5 text-paragraph-lg text-white disabled:bg-white disabled:text-primary-color"
          onClick={buttonEvent}
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
  buttonEvent,
  validation,
  warningText,
  ...restProps
}) => {
  const validCheck = Boolean(validation && value?.length);

  return (
    <div className="relative flex flex-col gap-2">
      <label
        htmlFor={category}
        className="noto select-none px-1 text-label text-primary-color"
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
        onChange={debounce(updater, 100)}
        placeholder={`${children} 입력`}
        className="noto h-8 w-full border-b-2 border-gray300 px-1 text-paragraph-lg outline-none focus:border-primary-color disabled:select-none disabled:bg-gray-300"
        {...restProps}
      />
      {hasButton && displayButton(buttonType, validation, buttonEvent)}
      {validCheck && <WarningMessage>{warningText}</WarningMessage>}
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
