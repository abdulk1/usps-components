import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Drawer',
  component: 'usps-drawer',
  tags: ['autodocs'],
  argTypes: {
    heading: {
      control: { type: 'text' },
      description: 'Drawer title text',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Whether the drawer is expanded',
    },
    variant: {
      control: { type: 'select' },
      options: ['informative', 'detailed'],
      description: 'Drawer visual style',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Informative: Story = {
  args: {
    heading: 'Informative Drawer',
    open: false,
    variant: 'informative',
  },
  render: (args) => `
    <usps-drawer heading="${args.heading}" variant="${args.variant}" ${args.open ? 'open' : ''}>
      This is an informative drawer body. Use it for concise supporting content.
    </usps-drawer>
  `,
};

export const Detailed: Story = {
  args: {
    heading: 'Detailed Drawer',
    open: true,
    variant: 'detailed',
  },
  render: (args) => `
    <usps-drawer heading="${args.heading}" variant="${args.variant}" ${args.open ? 'open' : ''}>
      This is a detailed drawer body with more space for longer descriptions, links, or supporting copy.
    </usps-drawer>
  `,
};
