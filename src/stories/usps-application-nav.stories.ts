import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Application Navigation',
  component: 'usps-application-nav',
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Application title',
    },
    layout: {
      control: { type: 'select' },
      options: ['desktop', 'mobile'],
      description: 'Layout for the navigation',
    },
    mobileLabel: {
      control: { type: 'text' },
      description: 'Mobile dropdown label text',
    },
    items: {
      control: { type: 'text' },
      description: 'JSON array of nav items: [{ "label": "...", "href": "...", "active": true }]',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Desktop: Story = {
  args: {
    title: 'Application Title',
    layout: 'desktop',
    items: JSON.stringify([
      { label: 'Create a Label', href: '#', active: true },
      { label: 'Preferences', href: '#' },
      { label: 'Shipping History', href: '#' },
      { label: 'Address Book', href: '#' },
      { label: 'Shipping Cart', href: '#' },
    ]),
  },
  render: (args) => `
    <usps-application-nav title="${args.title}" layout="${args.layout}" items='${args.items}'></usps-application-nav>
  `,
};

export const Mobile: Story = {
  args: {
    title: 'Go-To Navigation',
    layout: 'mobile',
    mobileLabel: 'Go to:',
    items: JSON.stringify([
      { label: 'Section 1', href: '#' },
      { label: 'Section 2', href: '#' },
    ]),
  },
  render: (args) => `
    <usps-application-nav
      title="${args.title}"
      layout="${args.layout}"
      mobile-label="${args.mobileLabel}"
      items='${args.items}'
    ></usps-application-nav>
  `,
};
