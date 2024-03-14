import HeartButton from './HeartButton';

/**@type{import('@storybook/react').Meta} */
export default {
  component: HeartButton,
};

/**@type{import('@storybook/react').StoryObj} */
export const 빈하트 = {
  args: {
    initialType: false,
  },
};
export const 하트 = {
  args: {
    initialType: true,
  },
};
