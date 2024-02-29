import { register } from 'swiper/element/bundle';

register();

const SwiperCard = ({ imageArray, slideStyle, imgStyle }) => {
  return (
    <section>
      <swiper-container
        className="size-full"
        slides-per-view="1"
        loop="true"
        pagination="true"
      >
        {imageArray.map((imageSrc, index) => (
          <swiper-slide key={index} loading="lazy">
            <figure className={`${slideStyle} flex w-full justify-center`}>
              <img className={imgStyle} src={imageSrc} alt="" />
              <figcaption className="sr-only">{`${index + 1}번 째 슬라이드`}</figcaption>
            </figure>
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
};

export default SwiperCard;
