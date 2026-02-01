import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Badge',
  component: 'usps-badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'The visual style variant of the badge',
    },
    label: {
      control: { type: 'text' },
      description: 'The text content of the badge',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Info: Story = {
  args: {
    variant: 'info',
    label: 'Info',
  },
  render: (args) =>
    `<usps-badge variant="${args.variant}" label="${args.label}"></usps-badge>`,
};

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Success',
  },
  render: (args) =>
    `<usps-badge variant="${args.variant}" label="${args.label}"></usps-badge>`,
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Warning',
  },
  render: (args) =>
    `<usps-badge variant="${args.variant}" label="${args.label}"></usps-badge>`,
};

export const Error: Story = {
  args: {
    variant: 'error',
    label: 'Error',
  },
  render: (args) =>
    `<usps-badge variant="${args.variant}" label="${args.label}"></usps-badge>`,
};
