const UploadImage = ({ image, handleDeleteImage }) => {
  return (
    <figure className="relative flex size-[135px] shrink-0 flex-grow-0 items-center overflow-hidden rounded-lg border-[1px] border-primary-color">
      <img className="size-full object-contain" src={image.src} alt="" />
      <figcaption>
        <p className="sr-only">{`${image.id}`}</p>
        <button
          onClick={() => handleDeleteImage(image.id)}
          type="button"
          className="absolute right-1 top-1 size-6 rounded-full bg-primary-color p-1.5"
        >
          <img src="/assets/common/delete.svg" alt="삭제" />
        </button>
      </figcaption>
    </figure>
  );
};

export default UploadImage;
