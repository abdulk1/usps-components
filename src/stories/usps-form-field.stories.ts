import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/FormField',
  component: 'usps-form-field',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The label text for the form field',
    },
    hint: {
      control: { type: 'text' },
      description: 'Optional hint text displayed below the label',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display when validation fails',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the field is required',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Full Name',
    hint: '',
    error: '',
    required: false,
  },
  render: (args) =>
    `<usps-form-field label="${args.label}" ${args.hint ? `hint="${args.hint}"` : ''} ${args.error ? `error="${args.error}"` : ''} ${args.required ? 'required' : ''}>
      <input type="text" placeholder="Enter your full name" />
    </usps-form-field>`,
};

export const WithHint: Story = {
  args: {
    label: 'Email Address',
    hint: 'We will never share your email with anyone.',
    error: '',
    required: false,
  },
  render: (args) =>
    `<usps-form-field label="${args.label}" ${args.hint ? `hint="${args.hint}"` : ''} ${args.error ? `error="${args.error}"` : ''} ${args.required ? 'required' : ''}>
      <input type="email" placeholder="you@example.com" />
    </usps-form-field>`,
};

export const WithError: Story = {
  args: {
    label: 'ZIP Code',
    hint: '',
    error: 'Please enter a valid ZIP code.',
    required: false,
  },
  render: (args) =>
    `<usps-form-field label="${args.label}" ${args.hint ? `hint="${args.hint}"` : ''} ${args.error ? `error="${args.error}"` : ''} ${args.required ? 'required' : ''}>
      <input type="text" placeholder="00000" value="abc" />
    </usps-form-field>`,
};

export const Required: Story = {
  args: {
    label: 'Street Address',
    hint: 'Include apartment or suite number if applicable.',
    error: '',
    required: true,
  },
  render: (args) =>
    `<usps-form-field label="${args.label}" ${args.hint ? `hint="${args.hint}"` : ''} ${args.error ? `error="${args.error}"` : ''} ${args.required ? 'required' : ''}>
      <input type="text" placeholder="123 Main St" />
    </usps-form-field>`,
};
