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
    items: {
      control: { type: 'text' },
      description:
        'JSON array of drawer items: [{ "heading": "...", "description": "...", "content": "..." }]',
    },
    activeIndex: {
      control: { type: 'number' },
      description: 'Selected drawer index (informative)',
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
    variant: 'informative',
    activeIndex: 0,
    items: JSON.stringify([
      {
        heading: 'Heading',
        description: 'Description',
        content:
          '<p>Active or hover state drawer content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
      },
      {
        heading: 'Heading',
        description: 'Description',
        content:
          '<p>Secondary drawer content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
      },
      {
        heading: 'Heading',
        description: 'Description',
        content:
          '<p>More drawer content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
      },
    ]),
  },
  render: (args) => `
    <usps-drawer
      heading="${args.heading}"
      variant="${args.variant}"
      items='${args.items}'
      active-index="${args.activeIndex}"
    ></usps-drawer>
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
