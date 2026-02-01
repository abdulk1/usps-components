import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/Input',
  component: 'usps-input',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The label for the input field',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the input',
    },
    value: {
      control: { type: 'text' },
      description: 'The current value of the input',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'The input type',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the input is required',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: '',
    placeholder: 'Enter text...',
    value: '',
    type: 'text',
    error: '',
    required: false,
    disabled: false,
  },
  render: (args) =>
    `<usps-input
      type="${args.type}"
      placeholder="${args.placeholder}"
      ${args.label ? `label="${args.label}"` : ''}
      ${args.value ? `value="${args.value}"` : ''}
      ${args.error ? `error="${args.error}"` : ''}
      ${args.required ? 'required' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-input>`,
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    value: '',
    type: 'email',
    error: '',
    required: false,
    disabled: false,
  },
  render: (args) =>
    `<usps-input
      type="${args.type}"
      placeholder="${args.placeholder}"
      ${args.label ? `label="${args.label}"` : ''}
      ${args.value ? `value="${args.value}"` : ''}
      ${args.error ? `error="${args.error}"` : ''}
      ${args.required ? 'required' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-input>`,
};

export const WithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    value: 'invalid-email',
    type: 'email',
    error: 'Please enter a valid email address',
    required: true,
    disabled: false,
  },
  render: (args) =>
    `<usps-input
      type="${args.type}"
      placeholder="${args.placeholder}"
      ${args.label ? `label="${args.label}"` : ''}
      ${args.value ? `value="${args.value}"` : ''}
      ${args.error ? `error="${args.error}"` : ''}
      ${args.required ? 'required' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-input>`,
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot type here',
    value: '',
    type: 'text',
    error: '',
    required: false,
    disabled: true,
  },
  render: (args) =>
    `<usps-input
      type="${args.type}"
      placeholder="${args.placeholder}"
      ${args.label ? `label="${args.label}"` : ''}
      ${args.value ? `value="${args.value}"` : ''}
      ${args.error ? `error="${args.error}"` : ''}
      ${args.required ? 'required' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-input>`,
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    value: '',
    type: 'text',
    error: '',
    required: true,
    disabled: false,
  },
  render: (args) =>
    `<usps-input
      type="${args.type}"
      placeholder="${args.placeholder}"
      ${args.label ? `label="${args.label}"` : ''}
      ${args.value ? `value="${args.value}"` : ''}
      ${args.error ? `error="${args.error}"` : ''}
      ${args.required ? 'required' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-input>`,
};
