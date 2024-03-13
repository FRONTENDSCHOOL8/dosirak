import gsap from 'gsap';
import { useState } from 'react';

const SettingCheckBox = ({ name, children }) => {
  const [checkbox, setCheckbox] = useState(false);

  const handleCheckBox = () => {
    if (!checkbox) {
      gsap.to(`.${name}`, {
        x: 25,
        ease: 'power2.inOut',
      });
    } else {
      gsap.to(`.${name}`, {
        x: 0,
        ease: 'power2.inOut',
      });
    }
    setCheckbox((checkbox) => !checkbox);
  };

  return (
    <div className="text-paragraph-lg">
      <input
        className="hidden [&+label>div]:bg-gray300 [&+label>div]:shadow-[inset_-2px_2px_10px_0.1px_rgba(205,205,205,1)] [&:checked+label>div]:bg-secondary-color [&:checked+label>div]:!shadow-[inset_0_0_rgba(0,0,0,0)] "
        id={name}
        name={name}
        type="checkbox"
        onChange={handleCheckBox}
      />
      <label htmlFor={name} className="flex justify-between">
        <span>{children}</span>
        <div className="flex h-6 w-12 items-center rounded-full p-1 ">
          <div
            className={`${name} size-4 rounded-full bg-gray100 drop-shadow-[0.5px_0.25px_1.5px_rgba(0,0,0,0.25)]`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default SettingCheckBox;
