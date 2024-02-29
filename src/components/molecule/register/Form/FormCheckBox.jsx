import { forwardRef } from 'react';

const FormCheckBox = (
  {
    name,
    checkImgSrc,
    unCheckImgSrc,
    styleClass,
    labelStyle,
    children,
    updater,
    checked,
  },
  ref
) => {
  return (
    <>
      <input
        ref={ref}
        type="checkbox"
        name={name}
        id={name}
        className={`${styleClass} h-[30px] w-[30px] appearance-none bg-center bg-no-repeat`}
        onChange={updater}
        checked={checked}
      />
      <label htmlFor={name} className={`noto select-none ${labelStyle}`}>
        {children}
      </label>
    </>
  );
};

export default forwardRef(FormCheckBox);
