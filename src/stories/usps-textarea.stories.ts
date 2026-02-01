import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Textarea',
  component: 'usps-textarea',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The label for the textarea',
    },
    value: {
      control: { type: 'text' },
      description: 'The current value of the textarea',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is required',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is disabled',
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of visible text rows',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the textarea',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Comments',
    placeholder: 'Enter your comments...',
    value: '',
    error: '',
    required: false,
    disabled: false,
    rows: 4,
  },
  render: (args) =>
    `<usps-textarea
      ${args.label ? `label="${args.label}"` : ''}
      ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
      ${args.value ? `value="${args.value}"` : ''}
      ${args.error ? `error="${args.error}"` : ''}
      ${args.rows ? `rows="${args.rows}"` : ''}
      ${args.required ? 'required' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-textarea>`,
};

export const WithError: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
    value: '',
    error: 'This field is required',
    required: true,
    disabled: false,
    rows: 4,
  },
  render: (args) =>
    `<usps-textarea
      ${args.label ? `label="${args.label}"` : ''}
      ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
      ${args.value ? `value="${args.value}"` : ''}
      ${args.error ? `error="${args.error}"` : ''}
      ${args.rows ? `rows="${args.rows}"` : ''}
      ${args.required ? 'required' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-textarea>`,
};

export const Disabled: Story = {
  args: {
    label: 'Notes',
    placeholder: 'Cannot type here',
    value: '',
    error: '',
    required: false,
    disabled: true,
    rows: 4,
  },
  render: (args) =>
    `<usps-textarea
      ${args.label ? `label="${args.label}"` : ''}
      ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
      ${args.value ? `value="${args.value}"` : ''}
      ${args.error ? `error="${args.error}"` : ''}
      ${args.rows ? `rows="${args.rows}"` : ''}
      ${args.required ? 'required' : ''}
      ${args.disabled ? 'disabled' : ''}
    ></usps-textarea>`,
};
