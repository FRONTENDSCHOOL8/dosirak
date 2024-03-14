import { ReactComponent as Eye } from '@/assets/register/eye.svg';
import Notice from '@/components/atom/common/Notice';
import ToggleButton from '@/components/atom/common/ToggleButton';
import CheckButton from '@/components/atom/register/CheckButton';
import { debounce } from '@/util';
import { memo } from 'react';

const displayButton = (buttonType, validation, buttonEvent) => {
  switch (buttonType) {
    case 'duplicate':
      return (
        <CheckButton disabled={validation} onClick={buttonEvent}>
          중복 확인
        </CheckButton>
      );
    case 'password':
      return (
        <ToggleButton
          onClickButton={buttonEvent}
          type="eye"
          isClicked={false}
        />
      );
    case 'requestAuth':
      return (
        <CheckButton disabled={validation} onClick={buttonEvent}>
          인증 요청
        </CheckButton>
      );
    case 'auth':
      return (
        <CheckButton disabled={validation} onClick={buttonEvent}>
          확인
        </CheckButton>
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
  error,
  errorText,
  complete,
  completeText,
  isPwVisible,
  isCfVisible,
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
          (category === 'password' && !isPwVisible) ||
          (category === 'passwordConfirm' && !isCfVisible)
            ? 'password'
            : 'text'
        }
        name={category}
        id={category}
        defaultValue={value}
        onChange={debounce(updater, 100)}
        placeholder={`${children} 입력`}
        className="noto h-8 w-full border-b-2 border-gray300 px-1 text-paragraph-lg outline-none read-only:select-none read-only:bg-gray-300 focus:border-primary-color disabled:select-none disabled:bg-gray-300"
        {...restProps}
      />
      {hasButton && displayButton(buttonType, validation, buttonEvent)}
      {validCheck && <Notice type="error">{warningText}</Notice>}
      {error && <Notice type="error">{errorText}</Notice>}
      {complete && <Notice type="complete">{completeText}</Notice>}
    </div>
  );
};

export default FormInput;
