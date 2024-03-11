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
    size = 'h-6 w-6',
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
        className={`${styleClass} ${size} me-1 appearance-none bg-cover bg-no-repeat`}
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
