import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/Stack',
  component: 'usps-stack',
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column'],
      description: 'The direction of the stack layout',
    },
    gap: {
      control: { type: 'text' },
      description: 'The gap between stack items (e.g. "16px", "1rem")',
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Alignment of items along the cross axis',
    },
  },
};

export default meta;
type Story = StoryObj;

const stackItemStyle = 'padding: 12px 24px; background-color: #336; color: #fff; border-radius: 4px;';

export const Column: Story = {
  args: {
    direction: 'column',
    gap: '16px',
    align: 'stretch',
  },
  render: (args) =>
    `<usps-stack direction="${args.direction}" gap="${args.gap}" align="${args.align}">
      <div style="${stackItemStyle}">First item</div>
      <div style="${stackItemStyle}">Second item</div>
      <div style="${stackItemStyle}">Third item</div>
    </usps-stack>`,
};

export const Row: Story = {
  args: {
    direction: 'row',
    gap: '16px',
    align: 'center',
  },
  render: (args) =>
    `<usps-stack direction="${args.direction}" gap="${args.gap}" align="${args.align}">
      <div style="${stackItemStyle}">First item</div>
      <div style="${stackItemStyle}">Second item</div>
      <div style="${stackItemStyle}">Third item</div>
    </usps-stack>`,
};

export const CenteredRow: Story = {
  args: {
    direction: 'row',
    gap: '24px',
    align: 'center',
  },
  render: (args) =>
    `<usps-stack direction="${args.direction}" gap="${args.gap}" align="${args.align}" style="justify-content: center;">
      <div style="${stackItemStyle}">Centered A</div>
      <div style="${stackItemStyle}">Centered B</div>
      <div style="${stackItemStyle}">Centered C</div>
    </usps-stack>`,
};
