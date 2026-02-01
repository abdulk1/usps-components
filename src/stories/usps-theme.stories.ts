import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Theme',
  component: 'usps-theme',
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'The color theme to apply to child components',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Light: Story = {
  args: {
    theme: 'light',
  },
  render: (args) =>
    `<usps-theme theme="${args.theme}">
      <div style="padding: 24px;">
        <h2>Light Theme</h2>
        <p>This content is rendered within the light theme context. All child components inherit the light color scheme.</p>
        <usps-button variant="primary">Primary Action</usps-button>
      </div>
    </usps-theme>`,
};

export const Dark: Story = {
  args: {
    theme: 'dark',
  },
  render: (args) =>
    `<usps-theme theme="${args.theme}">
      <div style="padding: 24px;">
        <h2>Dark Theme</h2>
        <p>This content is rendered within the dark theme context. All child components inherit the dark color scheme.</p>
        <usps-button variant="primary">Primary Action</usps-button>
      </div>
    </usps-theme>`,
};
