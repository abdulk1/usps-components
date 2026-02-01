import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/Divider',
  component: 'usps-divider',
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the divider',
    },
    color: {
      control: { type: 'color' },
      description: 'The color of the divider line',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    color: '',
  },
  render: (args) =>
    `<div>
      <p>Content above the divider</p>
      <usps-divider orientation="${args.orientation}" ${args.color ? `color="${args.color}"` : ''}></usps-divider>
      <p>Content below the divider</p>
    </div>`,
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    color: '',
  },
  render: (args) =>
    `<div style="display: flex; align-items: center; height: 100px;">
      <span>Left content</span>
      <usps-divider orientation="${args.orientation}" ${args.color ? `color="${args.color}"` : ''}></usps-divider>
      <span>Right content</span>
    </div>`,
};
