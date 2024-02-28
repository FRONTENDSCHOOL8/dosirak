const FormCheckBox = ({
  name,
  checkImgSrc,
  unCheckImgSrc,
  styleClass,
  labelStyle,
  children,
  updater,
  checked,
}) => {
  const checkImage = `checked:bg-[url('${checkImgSrc}')]`;
  const unCheckImage = `bg-[url('${unCheckImgSrc}')]`;

  return (
    <>
      <input
        type="checkbox"
        name={name}
        id={name}
        className={`${checkImage} ${unCheckImage} ${styleClass} h-[30px] w-[30px] appearance-none bg-center bg-no-repeat`}
        onChange={updater}
        checked={checked}
      />
      <label htmlFor={name} className={`noto select-none ${labelStyle}`}>
        {children}
      </label>
    </>
  );
};

export default FormCheckBox;
