const Dot = ({bgColor}) => {
  return (
    <span aria-hidden="true" className={`absolute ml-[5px] -top-1 inline-block w-1 h-1 rounded ${bgColor}`}></span>
  )
};

export default Dot;
