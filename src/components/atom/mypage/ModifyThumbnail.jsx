import { useLoginUserInfo } from '@/hook';
import { useState } from 'react';

const ModifyThumbnail = () => {
  const userInfo = useLoginUserInfo();
  const [thumbnailImg, setThumbnailImg] = useState(userInfo.thumbnail);

  const handleThumbnailUpload = (e) => {
    const uploadImage = [...e.target.files];
    const uploadImageURL = URL.createObjectURL(uploadImage[0]);

    setThumbnailImg(uploadImageURL);
  };

  return (
    <section className="flex h-[250px] flex-col items-center gap-4 bg-white pt-4">
      <figure className="relative size-48">
        <img src={thumbnailImg} className="size-full rounded-full " alt="" />
        <figcaption className="absolute bottom-0 right-0 size-12">
          <label htmlFor="thumbnail" className="size-full">
            <img
              className="size-full cursor-pointer"
              src="/assets/common/modify.svg"
              alt=""
            />
          </label>
        </figcaption>
      </figure>
      <input
        onChange={handleThumbnailUpload}
        type="file"
        id="thumbnail"
        name="thumbnail"
        className="hidden"
        accept="image/*"
      />
    </section>
  );
};

export default ModifyThumbnail;
