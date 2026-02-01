import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/Link',
  component: 'usps-link',
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: { type: 'text' },
      description: 'The URL the link points to',
    },
    variant: {
      control: { type: 'select' },
      options: ['body', 'heading', 'ecommerce'],
      description: 'The visual style variant of the link',
    },
    external: {
      control: { type: 'boolean' },
      description: 'Whether the link opens in a new tab',
    },
    label: {
      control: { type: 'text' },
      description: 'The link text',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Body: Story = {
  args: {
    href: 'https://www.usps.com',
    variant: 'body',
    external: false,
    label: 'Body Link',
  },
  render: (args) =>
    `<usps-link href="${args.href}" variant="${args.variant}" ${args.external ? 'external' : ''}>${args.label}</usps-link>`,
};

export const Heading: Story = {
  args: {
    href: 'https://www.usps.com',
    variant: 'heading',
    external: false,
    label: 'Heading Link',
  },
  render: (args) =>
    `<usps-link href="${args.href}" variant="${args.variant}" ${args.external ? 'external' : ''}>${args.label}</usps-link>`,
};

export const Ecommerce: Story = {
  args: {
    href: 'https://www.usps.com',
    variant: 'ecommerce',
    external: false,
    label: 'Ecommerce Link',
  },
  render: (args) =>
    `<usps-link href="${args.href}" variant="${args.variant}" ${args.external ? 'external' : ''}>${args.label}</usps-link>`,
};

export const External: Story = {
  args: {
    href: 'https://www.usps.com',
    variant: 'body',
    external: true,
    label: 'External Link',
  },
  render: (args) =>
    `<usps-link href="${args.href}" variant="${args.variant}" ${args.external ? 'external' : ''}>${args.label}</usps-link>`,
};
