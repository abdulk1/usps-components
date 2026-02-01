import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Components/Modal',
  component: 'usps-modal',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Whether the modal is currently visible',
    },
    heading: {
      control: { type: 'text' },
      description: 'The heading text displayed at the top of the modal',
    },
    width: {
      control: { type: 'text' },
      description: 'Custom width for the modal (e.g. "600px", "80%")',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    open: true,
    heading: 'Confirm Address',
    width: '',
  },
  render: (args) =>
    `<usps-modal ${args.open ? 'open' : ''} heading="${args.heading}" ${args.width ? `width="${args.width}"` : ''}>
      <p>Please confirm your mailing address before proceeding with the shipment.</p>
    </usps-modal>`,
};

export const WithFooter: Story = {
  args: {
    open: true,
    heading: 'Schedule a Pickup',
    width: '',
  },
  render: (args) =>
    `<usps-modal ${args.open ? 'open' : ''} heading="${args.heading}" ${args.width ? `width="${args.width}"` : ''}>
      <p>Select a date and time for your package pickup. A carrier will arrive during the selected window.</p>
      <div slot="footer">
        <usps-button variant="secondary">Cancel</usps-button>
        <usps-button variant="primary">Confirm Pickup</usps-button>
      </div>
    </usps-modal>`,
};

export const CustomWidth: Story = {
  args: {
    open: true,
    heading: 'Shipping Rate Calculator',
    width: '800px',
  },
  render: (args) =>
    `<usps-modal ${args.open ? 'open' : ''} heading="${args.heading}" ${args.width ? `width="${args.width}"` : ''}>
      <p>Use this wider modal to compare shipping rates across different service levels and package sizes.</p>
    </usps-modal>`,
};
