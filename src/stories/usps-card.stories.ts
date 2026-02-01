import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/Card',
  component: 'usps-card',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['large', 'small', 'image'],
      description: 'The visual style variant of the card',
    },
    heading: {
      control: { type: 'text' },
      description: 'The heading text for the card',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Large: Story = {
  args: {
    variant: 'large',
    heading: 'Track Your Package',
  },
  render: (args) =>
    `<usps-card variant="${args.variant}" heading="${args.heading}">
      <p>Enter your tracking number to get the latest status of your shipment.</p>
    </usps-card>`,
};

export const Small: Story = {
  args: {
    variant: 'small',
    heading: 'Quick Tools',
  },
  render: (args) =>
    `<usps-card variant="${args.variant}" heading="${args.heading}">
      <p>Access frequently used postal services and tools.</p>
    </usps-card>`,
};

export const WithImage: Story = {
  args: {
    variant: 'image',
    heading: 'Shipping Supplies',
  },
  render: (args) =>
    `<usps-card variant="${args.variant}" heading="${args.heading}">
      <img slot="image" src="https://via.placeholder.com/400x200" alt="placeholder" />
      <p>Order free shipping supplies delivered to your door.</p>
    </usps-card>`,
};
