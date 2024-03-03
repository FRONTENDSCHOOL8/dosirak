import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

const SwiperCard = ({ imageArray, slideStyle, imgStyle, onClick }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      injectStyles: [
        `
        .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background-color: #545454;
          border: 1px solid #333;
          filter: drop-shadow(0px 1px 3px rgba(51, 51, 51, 0.20));
        }
        .swiper-pagination-bullet-active {
          width: 9px;
          height: 9px;
          background-color: #FEFEFE;
          border: 1px solid #DCDCDC;
          filter: drop-shadow(0px 1px 3px rgba(51, 51, 51, 0.20));
        }
        `,
      ],
      pagination: {
        clickable: false,
        renderBullet: (_, className) => `<span class="${className}"></span>`,
      },
    };

    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);

  return (
    <section>
      <h2 className="sr-only">이미지 미리보기</h2>
      <swiper-container
        ref={swiperRef}
        init="false"
        className="size-full"
        slides-per-view="1"
        loop="true"
        pagination="true"
      >
        {imageArray.map((imageSrc, index) => (
          <swiper-slide key={index} loading="lazy">
            <figure
              onClick={onClick}
              className={`${slideStyle} flex w-full justify-center`}
            >
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
