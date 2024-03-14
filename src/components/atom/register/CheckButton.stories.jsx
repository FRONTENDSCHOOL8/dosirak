import CheckButton from './CheckButton';

/**@type{import('@storybook/react').Meta} */
export default {
  component: CheckButton,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', position: 'relative', width: '90px' }}>
        <Story />
      </div>
    ),
  ],
};

/**@type{import('@storybook/react').StoryObj} */
export const 기본표시 = {
  args: {
    disabled: false,
    children: 'Check',
  },
};
