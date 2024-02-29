import { useEffect } from 'react';
import { useState } from 'react';

const Spinner = ({ textArray }) => {
  const [index, addIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      addIndex((index) => index + 1);

      if (index === textArray.length - 1) {
        addIndex(0);
      }
    }, 600);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <figure className="absolute z-50 flex size-full flex-col items-center justify-center gap-4 bg-white">
      <img
        className="size-24 select-none"
        src="/src/assets/common/spinner.svg"
        alt=""
        draggable={false}
      />
      <figcaption className="font-Gong-Gothic-m">{textArray[index]}</figcaption>
    </figure>
  );
};

export default Spinner;
