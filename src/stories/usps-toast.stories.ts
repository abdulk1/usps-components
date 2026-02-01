import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Toast',
  component: 'usps-toast',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'The visual style variant of the toast',
    },
    duration: {
      control: { type: 'number' },
      description: 'Duration in milliseconds before the toast auto-dismisses',
    },
    position: {
      control: { type: 'select' },
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      description: 'The position of the toast on screen',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Whether the toast is currently visible',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Info: Story = {
  args: {
    variant: 'info',
    duration: 5000,
    position: 'top-right',
    open: true,
  },
  render: (args) =>
    `<usps-toast variant="${args.variant}" duration="${args.duration}" position="${args.position}" ${args.open ? 'open' : ''}>
      Your tracking information has been updated.
    </usps-toast>`,
};

export const Success: Story = {
  args: {
    variant: 'success',
    duration: 5000,
    position: 'top-right',
    open: true,
  },
  render: (args) =>
    `<usps-toast variant="${args.variant}" duration="${args.duration}" position="${args.position}" ${args.open ? 'open' : ''}>
      Payment processed successfully.
    </usps-toast>`,
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    duration: 5000,
    position: 'top-right',
    open: true,
  },
  render: (args) =>
    `<usps-toast variant="${args.variant}" duration="${args.duration}" position="${args.position}" ${args.open ? 'open' : ''}>
      Your session will expire in 5 minutes.
    </usps-toast>`,
};

export const Error: Story = {
  args: {
    variant: 'error',
    duration: 5000,
    position: 'top-right',
    open: true,
  },
  render: (args) =>
    `<usps-toast variant="${args.variant}" duration="${args.duration}" position="${args.position}" ${args.open ? 'open' : ''}>
      Failed to save your address. Please try again.
    </usps-toast>`,
};
