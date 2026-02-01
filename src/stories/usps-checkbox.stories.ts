import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'usps-checkbox',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The label for the checkbox',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked',
    },
    value: {
      control: { type: 'text' },
      description: 'The value of the checkbox',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    value: 'terms',
    error: '',
    disabled: false,
  },
  render: (args) =>
    `<usps-checkbox
      label="${args.label}"
      value="${args.value}"
      ${args.error ? `error="${args.error}"` : ''}
      ${args.checked ? 'checked' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-checkbox>`,
};

export const Checked: Story = {
  args: {
    label: 'I agree to the privacy policy',
    checked: true,
    value: 'privacy',
    error: '',
    disabled: false,
  },
  render: (args) =>
    `<usps-checkbox
      label="${args.label}"
      value="${args.value}"
      ${args.error ? `error="${args.error}"` : ''}
      ${args.checked ? 'checked' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-checkbox>`,
};

export const WithError: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    value: 'terms',
    error: 'You must accept the terms to continue',
    disabled: false,
  },
  render: (args) =>
    `<usps-checkbox
      label="${args.label}"
      value="${args.value}"
      ${args.error ? `error="${args.error}"` : ''}
      ${args.checked ? 'checked' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-checkbox>`,
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    checked: false,
    value: 'disabled',
    error: '',
    disabled: true,
  },
  render: (args) =>
    `<usps-checkbox
      label="${args.label}"
      value="${args.value}"
      ${args.error ? `error="${args.error}"` : ''}
      ${args.checked ? 'checked' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-checkbox>`,
};
