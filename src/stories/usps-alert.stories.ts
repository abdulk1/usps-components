import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/Alert',
  component: 'usps-alert',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'The visual style variant of the alert',
    },
    dismissible: {
      control: { type: 'boolean' },
      description: 'Whether the alert can be dismissed by the user',
    },
    heading: {
      control: { type: 'text' },
      description: 'The heading text for the alert',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Info: Story = {
  args: {
    variant: 'info',
    dismissible: false,
    heading: 'Information',
  },
  render: (args) =>
    `<usps-alert variant="${args.variant}" heading="${args.heading}" ${args.dismissible ? 'dismissible' : ''}>
      Your package is currently in transit and expected to arrive within 3-5 business days.
    </usps-alert>`,
};

export const Success: Story = {
  args: {
    variant: 'success',
    dismissible: false,
    heading: 'Success',
  },
  render: (args) =>
    `<usps-alert variant="${args.variant}" heading="${args.heading}" ${args.dismissible ? 'dismissible' : ''}>
      Your shipping label has been created successfully.
    </usps-alert>`,
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    dismissible: false,
    heading: 'Warning',
  },
  render: (args) =>
    `<usps-alert variant="${args.variant}" heading="${args.heading}" ${args.dismissible ? 'dismissible' : ''}>
      Delivery may be delayed due to weather conditions in your area.
    </usps-alert>`,
};

export const Error: Story = {
  args: {
    variant: 'error',
    dismissible: false,
    heading: 'Error',
  },
  render: (args) =>
    `<usps-alert variant="${args.variant}" heading="${args.heading}" ${args.dismissible ? 'dismissible' : ''}>
      The address you entered could not be verified. Please check and try again.
    </usps-alert>`,
};

export const Dismissible: Story = {
  args: {
    variant: 'info',
    dismissible: true,
    heading: 'Dismissible Alert',
  },
  render: (args) =>
    `<usps-alert variant="${args.variant}" heading="${args.heading}" ${args.dismissible ? 'dismissible' : ''}>
      This alert can be dismissed by clicking the close button.
    </usps-alert>`,
};
