const SubInfo = ({ children, svg, svgAlt }) => {
  return (
    <div className="flex gap-1">
      <img
        src={`../src/assets/${svg}.svg`}
        alt={`${svgAlt} 아이콘`}
        className="w-[10px]"
      />
      <span className="text-paragraph-sm text-gray700">{children}</span>
    </div>
  );
};

export default SubInfo;
