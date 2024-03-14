const NotUploadedImage = () => {
  return (
    <figure className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 select-none flex-col items-center gap-4">
      <img src="/assets/feed/imageUpload.svg" alt="" />
      <figcaption className="noto">이미지를 업로드해 주세요.</figcaption>
    </figure>
  );
};

export default NotUploadedImage;
