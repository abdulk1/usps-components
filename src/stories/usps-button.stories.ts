import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Button',
  component: 'usps-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ecommerce', 'inactive', 'icon-combo', 'ecommerce-icon'],
      description: 'The visual style variant of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    selected: {
      control: { type: 'boolean' },
      description: 'Whether the button is in a selected state (icon combo only)',
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
    selected: false,
    size: 'md',
    label: 'Primary Button',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.selected ? 'selected' : ''} ${args.disabled ? 'disabled' : ''}>${args.label}</usps-button>`,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    disabled: false,
    selected: false,
    size: 'md',
    label: 'Secondary Button',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.selected ? 'selected' : ''} ${args.disabled ? 'disabled' : ''}>${args.label}</usps-button>`,
};

export const Ecommerce: Story = {
  args: {
    variant: 'ecommerce',
    disabled: false,
    selected: false,
    size: 'md',
    label: 'Ecommerce Button',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.selected ? 'selected' : ''} ${args.disabled ? 'disabled' : ''}>${args.label}</usps-button>`,
};

export const Inactive: Story = {
  args: {
    variant: 'inactive',
    disabled: false,
    selected: false,
    size: 'md',
    label: 'Inactive Button',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.selected ? 'selected' : ''} ${args.disabled ? 'disabled' : ''}>${args.label}</usps-button>`,
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    selected: false,
    size: 'md',
    label: 'Disabled Button',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.selected ? 'selected' : ''} ${args.disabled ? 'disabled' : ''}>${args.label}</usps-button>`,
};

export const Small: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    selected: false,
    size: 'sm',
    label: 'Small Button',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.selected ? 'selected' : ''} ${args.disabled ? 'disabled' : ''}>${args.label}</usps-button>`,
};

export const Large: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    selected: false,
    size: 'lg',
    label: 'Large Button',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.selected ? 'selected' : ''} ${args.disabled ? 'disabled' : ''}>${args.label}</usps-button>`,
};

export const IconCombo: Story = {
  args: {
    variant: 'icon-combo',
    disabled: false,
    selected: false,
    size: 'md',
    label: 'Individual',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.selected ? 'selected' : ''} ${args.disabled ? 'disabled' : ''}>
      <span aria-hidden="true" style="display:inline-block;width:24px;height:24px;border-radius:12px;background:#999999;"></span>
      ${args.label}
    </usps-button>`,
};

export const IconComboSelected: Story = {
  args: {
    variant: 'icon-combo',
    disabled: false,
    selected: true,
    size: 'md',
    label: 'Individual',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.selected ? 'selected' : ''} ${args.disabled ? 'disabled' : ''}>
      <span aria-hidden="true" style="display:inline-block;width:24px;height:24px;border-radius:12px;background:#333366;"></span>
      ${args.label}
    </usps-button>`,
};

export const EcommerceIcon: Story = {
  args: {
    variant: 'ecommerce-icon',
    disabled: false,
    selected: false,
    size: 'md',
    label: 'Ecommerce',
  },
  render: (args) =>
    `<usps-button variant="${args.variant}" size="${args.size}" ${args.selected ? 'selected' : ''} ${args.disabled ? 'disabled' : ''}>
      <span aria-hidden="true" style="display:inline-block;width:18px;height:18px;border-radius:3px;background:#FFFFFF;"></span>
      ${args.label}
    </usps-button>`,
};
