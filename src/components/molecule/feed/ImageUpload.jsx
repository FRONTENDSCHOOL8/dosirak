import NotUploadedImage from '@/components/atom/common/NotUploadedImage';
import UploadImage from '@/components/atom/common/UploadImage';

const ImageUpload = ({ imageList, handleUploadImage, setImageList }) => {
  const imageUrlList = imageList.map((image, index) => ({
    id: `image_${index}`,
    src: URL.createObjectURL(image),
  }));

  const handleDeleteImage = (id) => {
    const selectIndex = id.split('_')[1];

    setImageList(imageList.filter((_, index) => index != selectIndex));
  };

  return (
    <section className="h-40">
      <h4 className="noto text-label">
        <strong className="text-red-600">*</strong> 피드 메인에 보일 이미지를
        업로드해 주세요!
      </h4>
      <label
        htmlFor="swiperImages"
        className="theme-scroll relative flex h-full min-w-full cursor-pointer gap-4 overflow-x-auto rounded-lg border-2 p-2"
      >
        {imageList.length ? (
          imageUrlList.map((image) => (
            <UploadImage
              key={image.id}
              image={image}
              handleDeleteImage={handleDeleteImage}
            />
          ))
        ) : (
          <NotUploadedImage />
        )}
      </label>
      <input
        onChange={handleUploadImage}
        className="hidden"
        type="file"
        multiple
        name="swiperImages"
        id="swiperImages"
        accept="image/*"
      />
    </section>
  );
};

export default ImageUpload;
