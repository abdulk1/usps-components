import type { Meta, StoryObj } from '@storybook/web-components';

const defaultOptions = JSON.stringify([
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]);

const stateOptions = JSON.stringify([
  { label: 'Select a state...', value: '' },
  { label: 'California', value: 'CA' },
  { label: 'New York', value: 'NY' },
  { label: 'Texas', value: 'TX' },
  { label: 'Florida', value: 'FL' },
]);

const meta: Meta = {
  title: 'Components/Select',
  component: 'usps-select',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The label for the select field',
    },
    options: {
      control: { type: 'text' },
      description: 'JSON string of options array with label and value properties',
    },
    value: {
      control: { type: 'text' },
      description: 'The currently selected value',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the select is required',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Choose an option',
    options: stateOptions,
    value: '',
    error: '',
    required: false,
    disabled: false,
  },
  render: (args) =>
    `<usps-select
      ${args.label ? `label="${args.label}"` : ''}
      options='${args.options}'
      ${args.value ? `value="${args.value}"` : ''}
      ${args.error ? `error="${args.error}"` : ''}
      ${args.required ? 'required' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-select>`,
};

export const WithError: Story = {
  args: {
    label: 'State',
    options: stateOptions,
    value: '',
    error: 'Please select a state',
    required: true,
    disabled: false,
  },
  render: (args) =>
    `<usps-select
      ${args.label ? `label="${args.label}"` : ''}
      options='${args.options}'
      ${args.value ? `value="${args.value}"` : ''}
      ${args.error ? `error="${args.error}"` : ''}
      ${args.required ? 'required' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-select>`,
};

export const Disabled: Story = {
  args: {
    label: 'State',
    options: defaultOptions,
    value: 'option1',
    error: '',
    required: false,
    disabled: true,
  },
  render: (args) =>
    `<usps-select
      ${args.label ? `label="${args.label}"` : ''}
      options='${args.options}'
      ${args.value ? `value="${args.value}"` : ''}
      ${args.error ? `error="${args.error}"` : ''}
      ${args.required ? 'required' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-select>`,
};
