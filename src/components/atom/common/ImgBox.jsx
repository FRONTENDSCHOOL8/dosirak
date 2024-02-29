const ImgBox = ({ size = '', className = '' }) => {
  return (
    <div className={`${size} ${className} overflow-hidden`.trim()}>
      {/* <img
        src="/src/assets/test.jpg"
        alt=""
        className="block h-full w-full object-cover"
      /> */}
    </div>
  );
};

export default ImgBox;
