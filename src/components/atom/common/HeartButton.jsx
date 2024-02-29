import usePostStore from '@/store/usePostStore';

const HeartButton = ({ id, heartColor = 'black', className = '' }) => {
  const { hearts, toggleHeart } = usePostStore((state) => ({
    hearts: state.hearts,
    toggleHeart: state.toggleHeart,
  }));

  const heartType = hearts[id] || false;

  let svgName;
  svgName = heartType ? true : `${false}-${heartColor}`;

  return (
    <button type="button" className={className} onClick={() => toggleHeart(id)}>
      <img src={`../src/assets/common/heart-${svgName}.svg`} alt="좋아요" />
    </button>
  );
};

export default HeartButton;
