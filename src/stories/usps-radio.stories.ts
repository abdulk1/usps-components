import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Radio',
  component: 'usps-radio',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The label for the radio button',
    },
    name: {
      control: { type: 'text' },
      description: 'The name attribute for grouping radio buttons',
    },
    value: {
      control: { type: 'text' },
      description: 'The value of the radio button',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is checked',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is disabled',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Priority Mail',
    name: 'shipping',
    value: 'priority',
    checked: false,
    error: '',
    disabled: false,
  },
  render: (args) =>
    `<usps-radio
      label="${args.label}"
      name="${args.name}"
      value="${args.value}"
      ${args.error ? `error="${args.error}"` : ''}
      ${args.checked ? 'checked' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-radio>`,
};

export const Checked: Story = {
  args: {
    label: 'Priority Mail Express',
    name: 'shipping',
    value: 'express',
    checked: true,
    error: '',
    disabled: false,
  },
  render: (args) =>
    `<usps-radio
      label="${args.label}"
      name="${args.name}"
      value="${args.value}"
      ${args.error ? `error="${args.error}"` : ''}
      ${args.checked ? 'checked' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-radio>`,
};

export const WithError: Story = {
  args: {
    label: 'Ground Advantage',
    name: 'shipping',
    value: 'ground',
    checked: false,
    error: 'Please select a shipping method',
    disabled: false,
  },
  render: (args) =>
    `<usps-radio
      label="${args.label}"
      name="${args.name}"
      value="${args.value}"
      ${args.error ? `error="${args.error}"` : ''}
      ${args.checked ? 'checked' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-radio>`,
};

export const Disabled: Story = {
  args: {
    label: 'Media Mail',
    name: 'shipping',
    value: 'media',
    checked: false,
    error: '',
    disabled: true,
  },
  render: (args) =>
    `<usps-radio
      label="${args.label}"
      name="${args.name}"
      value="${args.value}"
      ${args.error ? `error="${args.error}"` : ''}
      ${args.checked ? 'checked' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-radio>`,
};
