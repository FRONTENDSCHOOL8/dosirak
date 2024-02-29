import postStore from '@/store/postStore';

const HeartButton = ({ id, heartColor = 'black', className = '' }) => {
  // const { heartType, setHeartType } = postStore((state) => state);
  const { hearts, toggleHeart } = postStore((state) => ({
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
