import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Split Button',
  component: 'usps-split-button',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Primary button label',
    },
    options: {
      control: { type: 'text' },
      description: 'JSON array of menu options: [{ "label": "...", "value": "..." }]',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the split button is disabled',
    },
  },
};

export default meta;
type Story = StoryObj;

const defaultOptions = JSON.stringify([
  { label: 'Text field text', value: 'option-1' },
  { label: 'Text field text', value: 'option-2' },
  { label: 'Text field text', value: 'option-3' },
]);

export const Default: Story = {
  args: {
    label: 'Button Label',
    options: defaultOptions,
    disabled: false,
  },
  render: (args) =>
    `<usps-split-button label="${args.label}" options='${args.options}' ${args.disabled ? 'disabled' : ''}></usps-split-button>`,
};

export const Disabled: Story = {
  args: {
    label: 'Button Label',
    options: defaultOptions,
    disabled: true,
  },
  render: (args) =>
    `<usps-split-button label="${args.label}" options='${args.options}' ${args.disabled ? 'disabled' : ''}></usps-split-button>`,
};
