import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/Tooltip',
  component: 'usps-tooltip',
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'The text content displayed inside the tooltip',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'The position of the tooltip relative to the trigger element',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Top: Story = {
  args: {
    content: 'This tooltip appears on top',
    position: 'top',
  },
  render: (args) =>
    `<div style="padding: 60px; text-align: center;">
      <usps-tooltip content="${args.content}" position="${args.position}">
        <button>Hover me (Top)</button>
      </usps-tooltip>
    </div>`,
};

export const Bottom: Story = {
  args: {
    content: 'This tooltip appears on the bottom',
    position: 'bottom',
  },
  render: (args) =>
    `<div style="padding: 60px; text-align: center;">
      <usps-tooltip content="${args.content}" position="${args.position}">
        <button>Hover me (Bottom)</button>
      </usps-tooltip>
    </div>`,
};

export const Left: Story = {
  args: {
    content: 'This tooltip appears on the left',
    position: 'left',
  },
  render: (args) =>
    `<div style="padding: 60px; text-align: center;">
      <usps-tooltip content="${args.content}" position="${args.position}">
        <button>Hover me (Left)</button>
      </usps-tooltip>
    </div>`,
};

export const Right: Story = {
  args: {
    content: 'This tooltip appears on the right',
    position: 'right',
  },
  render: (args) =>
    `<div style="padding: 60px; text-align: center;">
      <usps-tooltip content="${args.content}" position="${args.position}">
        <button>Hover me (Right)</button>
      </usps-tooltip>
    </div>`,
};
