import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/Button',
  component: 'usps-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ecommerce', 'inactive'],
      description: 'The visual style variant of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    label: {
      control: { type: 'text' },
      description: 'The button label text',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    size: 'md',
    label: 'Primary Button',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.disabled ? 'disabled' : ''}>${args.label}</usps-button>`,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    disabled: false,
    size: 'md',
    label: 'Secondary Button',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.disabled ? 'disabled' : ''}>${args.label}</usps-button>`,
};

export const Ecommerce: Story = {
  args: {
    variant: 'ecommerce',
    disabled: false,
    size: 'md',
    label: 'Ecommerce Button',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.disabled ? 'disabled' : ''}>${args.label}</usps-button>`,
};

export const Inactive: Story = {
  args: {
    variant: 'inactive',
    disabled: false,
    size: 'md',
    label: 'Inactive Button',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.disabled ? 'disabled' : ''}>${args.label}</usps-button>`,
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    size: 'md',
    label: 'Disabled Button',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.disabled ? 'disabled' : ''}>${args.label}</usps-button>`,
};

export const Small: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    size: 'sm',
    label: 'Small Button',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.disabled ? 'disabled' : ''}>${args.label}</usps-button>`,
};

export const Large: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    size: 'lg',
    label: 'Large Button',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.disabled ? 'disabled' : ''}>${args.label}</usps-button>`,
};
