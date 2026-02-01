import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Grid',
  component: 'usps-grid',
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'number' },
      description: 'The number of columns in the grid',
    },
    gap: {
      control: { type: 'text' },
      description: 'The gap between grid items (e.g. "16px", "1rem")',
    },
  },
};

export default meta;
type Story = StoryObj;

const gridItemStyle = 'padding: 16px; background-color: #336; color: #fff; text-align: center; border-radius: 4px;';

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    gap: '16px',
  },
  render: (args) =>
    `<usps-grid columns="${args.columns}" gap="${args.gap}">
      <div style="${gridItemStyle}">Item 1</div>
      <div style="${gridItemStyle}">Item 2</div>
      <div style="${gridItemStyle}">Item 3</div>
      <div style="${gridItemStyle}">Item 4</div>
      <div style="${gridItemStyle}">Item 5</div>
      <div style="${gridItemStyle}">Item 6</div>
    </usps-grid>`,
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    gap: '16px',
  },
  render: (args) =>
    `<usps-grid columns="${args.columns}" gap="${args.gap}">
      <div style="${gridItemStyle}">Item 1</div>
      <div style="${gridItemStyle}">Item 2</div>
      <div style="${gridItemStyle}">Item 3</div>
      <div style="${gridItemStyle}">Item 4</div>
      <div style="${gridItemStyle}">Item 5</div>
      <div style="${gridItemStyle}">Item 6</div>
      <div style="${gridItemStyle}">Item 7</div>
      <div style="${gridItemStyle}">Item 8</div>
    </usps-grid>`,
};

export const CustomGap: Story = {
  args: {
    columns: 3,
    gap: '32px',
  },
  render: (args) =>
    `<usps-grid columns="${args.columns}" gap="${args.gap}">
      <div style="${gridItemStyle}">Item 1</div>
      <div style="${gridItemStyle}">Item 2</div>
      <div style="${gridItemStyle}">Item 3</div>
      <div style="${gridItemStyle}">Item 4</div>
      <div style="${gridItemStyle}">Item 5</div>
      <div style="${gridItemStyle}">Item 6</div>
    </usps-grid>`,
};
