import SwiperCard from './SwiperCard';

/**@type{import('@storybook/react').Meta} */
export default {
  component: SwiperCard,
};

/**@type{import('@storybook/react').StoryObj} */
export const 피드썸네일 = {
  args: {
    imageArray: [
      'https://sangbase.kro.kr/api/files/2l9retlkxivjjm2/yfmmxcbpbyu5lud/76Cb4mxISjd0_oHTi5jWURy.jpg',
      'https://sangbase.kro.kr/api/files/2l9retlkxivjjm2/yfmmxcbpbyu5lud/image_234_h68kRW07wt.png',
      'https://sangbase.kro.kr/api/files/2l9retlkxivjjm2/yfmmxcbpbyu5lud/kakao_talk_20231107_133137179_crjN5i0KhQ.gif',
      'https://sangbase.kro.kr/api/files/2l9retlkxivjjm2/yfmmxcbpbyu5lud/kakao_talk_20240205_130127901_16_GCNqjdkp9X.jpg',
    ],
    slideStyle: 'h-60',
    imgStyle: 'rounded-2xl',
  },
};
