import RegisterStatusBar from './RegisterStatusBar';

/**@type{import('@storybook/react').Meta} */
export default {
  component: RegisterStatusBar,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
};

/**@type{import('@storybook/react').StoryObj} */
export const 기본표시 = {};
