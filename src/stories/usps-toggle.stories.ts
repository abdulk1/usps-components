import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Toggle',
  component: 'usps-toggle',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The label for the toggle',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is disabled',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
    checked: false,
    disabled: false,
  },
  render: (args) =>
    `<usps-toggle
      label="${args.label}"
      ${args.checked ? 'checked' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-toggle>`,
};

export const Checked: Story = {
  args: {
    label: 'Notifications enabled',
    checked: true,
    disabled: false,
  },
  render: (args) =>
    `<usps-toggle
      label="${args.label}"
      ${args.checked ? 'checked' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-toggle>`,
};

export const Disabled: Story = {
  args: {
    label: 'Feature unavailable',
    checked: false,
    disabled: true,
  },
  render: (args) =>
    `<usps-toggle
      label="${args.label}"
      ${args.checked ? 'checked' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-toggle>`,
};
