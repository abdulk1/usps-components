import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Callout',
  component: 'usps-callout',
  tags: ['autodocs'],
  argTypes: {
    heading: {
      control: { type: 'text' },
      description: 'Callout heading text',
    },
    variant: {
      control: { type: 'select' },
      options: ['plain', 'icon'],
      description: 'Visual style for the callout',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Single: Story = {
  args: {
    heading: 'First Product or Service',
    variant: 'icon',
  },
  render: (args) => `
    <usps-callout heading="${args.heading}" variant="${args.variant}">
      <span slot="icon" aria-hidden="true" style="display:inline-block;width:32px;height:32px;border-radius:16px;background:#333366;"></span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
    </usps-callout>
  `,
};

export const ThreeColumn: Story = {
  render: () => `
    <usps-grid columns="repeat(3, 1fr)" gap="24px">
      <usps-callout heading="First Product or Service" variant="icon">
        <span slot="icon" aria-hidden="true" style="display:inline-block;width:32px;height:32px;border-radius:16px;background:#333366;"></span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </usps-callout>
      <usps-callout heading="Second Product or Service" variant="icon">
        <span slot="icon" aria-hidden="true" style="display:inline-block;width:32px;height:32px;border-radius:16px;background:#333366;"></span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </usps-callout>
      <usps-callout heading="Third Product or Service" variant="icon">
        <span slot="icon" aria-hidden="true" style="display:inline-block;width:32px;height:32px;border-radius:16px;background:#333366;"></span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </usps-callout>
    </usps-grid>
  `,
};
