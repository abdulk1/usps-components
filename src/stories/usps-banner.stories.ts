import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Banner',
  component: 'usps-banner',
  tags: ['autodocs'],
  argTypes: {
    heading: {
      control: { type: 'text' },
      description: 'Banner title text',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Banner supporting text',
    },
    variant: {
      control: { type: 'select' },
      options: ['hero', 'marketing'],
      description: 'Banner visual style',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Hero: Story = {
  args: {
    heading: 'Page Title with CTA',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    variant: 'hero',
  },
  render: (args) => `
    <usps-banner heading="${args.heading}" subtitle="${args.subtitle}" variant="${args.variant}">
      <div slot="actions">
        <usps-button variant="primary">Primary CTA</usps-button>
        <usps-button variant="secondary">Secondary CTA</usps-button>
      </div>
      <div slot="media" style="width:100%;height:180px;background:#D8D8D8;border-radius:8px;"></div>
    </usps-banner>
  `,
};

export const Marketing: Story = {
  args: {
    heading: 'Marketing Banner',
    subtitle: 'Use a lighter treatment for promotional messaging and small CTAs.',
    variant: 'marketing',
  },
  render: (args) => `
    <usps-banner heading="${args.heading}" subtitle="${args.subtitle}" variant="${args.variant}">
      <div slot="actions">
        <usps-button variant="primary">Primary CTA</usps-button>
        <usps-link href="#" variant="body">Secondary Link</usps-link>
      </div>
    </usps-banner>
  `,
};
