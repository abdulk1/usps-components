import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Container',
  component: 'usps-container',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full'],
      description: 'The maximum width of the container',
    },
  },
};

export default meta;
type Story = StoryObj;

const containerContentStyle = 'padding: 24px; background-color: #e8f0fe; border: 1px dashed #336; border-radius: 4px;';

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (args) =>
    `<usps-container size="${args.size}">
      <div style="${containerContentStyle}">
        <p>This is a <strong>small</strong> container. Its max-width is constrained to provide a narrow content area.</p>
      </div>
    </usps-container>`,
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
  render: (args) =>
    `<usps-container size="${args.size}">
      <div style="${containerContentStyle}">
        <p>This is a <strong>medium</strong> container. It provides a balanced content width suitable for most layouts.</p>
      </div>
    </usps-container>`,
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: (args) =>
    `<usps-container size="${args.size}">
      <div style="${containerContentStyle}">
        <p>This is a <strong>large</strong> container. It allows content to stretch wider for data-heavy layouts.</p>
      </div>
    </usps-container>`,
};

export const Full: Story = {
  args: {
    size: 'full',
  },
  render: (args) =>
    `<usps-container size="${args.size}">
      <div style="${containerContentStyle}">
        <p>This is a <strong>full-width</strong> container. It spans the entire available width.</p>
      </div>
    </usps-container>`,
};
