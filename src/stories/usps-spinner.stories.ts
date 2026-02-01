import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Spinner',
  component: 'usps-spinner',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the spinner',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'white'],
      description: 'The color of the spinner',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
  render: (args) =>
    `<usps-spinner size="${args.size}" color="${args.color}"></usps-spinner>`,
};

export const Small: Story = {
  args: {
    size: 'sm',
    color: 'primary',
  },
  render: (args) =>
    `<usps-spinner size="${args.size}" color="${args.color}"></usps-spinner>`,
};

export const Large: Story = {
  args: {
    size: 'lg',
    color: 'primary',
  },
  render: (args) =>
    `<usps-spinner size="${args.size}" color="${args.color}"></usps-spinner>`,
};

export const White: Story = {
  args: {
    size: 'md',
    color: 'white',
  },
  render: (args) =>
    `<div style="background-color: #333366; padding: 20px; display: inline-block; border-radius: 4px;">
      <usps-spinner size="${args.size}" color="${args.color}"></usps-spinner>
    </div>`,
};
