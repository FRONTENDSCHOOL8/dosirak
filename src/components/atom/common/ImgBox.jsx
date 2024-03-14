const ImgBox = ({ url, alt, size = '', className = '' }) => {
  return (
    <div className={`${size} ${className} mx-auto overflow-hidden`.trim()}>
      <img src={url} alt={alt} className="block h-full w-full object-cover" />
    </div>
  );
};

export default ImgBox;
