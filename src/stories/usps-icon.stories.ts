import type { Meta, StoryObj } from '@storybook/web-components-vite';

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`;

const meta: Meta = {
  title: 'Components/Icon',
  component: 'usps-icon',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xsm', 'sm', 'md', 'lg', 'xlg'],
      description: 'The size of the icon',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'success', 'failure', 'warning', 'gray'],
      description: 'The color of the icon',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'default',
  },
  render: (args) =>
    `<usps-icon size="${args.size}" color="${args.color}">${svgIcon}</usps-icon>`,
};

export const Success: Story = {
  args: {
    size: 'md',
    color: 'success',
  },
  render: (args) =>
    `<usps-icon size="${args.size}" color="${args.color}">${svgIcon}</usps-icon>`,
};

export const Failure: Story = {
  args: {
    size: 'md',
    color: 'failure',
  },
  render: (args) =>
    `<usps-icon size="${args.size}" color="${args.color}">${svgIcon}</usps-icon>`,
};

export const Warning: Story = {
  args: {
    size: 'md',
    color: 'warning',
  },
  render: (args) =>
    `<usps-icon size="${args.size}" color="${args.color}">${svgIcon}</usps-icon>`,
};

export const ExtraSmall: Story = {
  args: {
    size: 'xsm',
    color: 'default',
  },
  render: (args) =>
    `<usps-icon size="${args.size}" color="${args.color}">${svgIcon}</usps-icon>`,
};

export const Small: Story = {
  args: {
    size: 'sm',
    color: 'default',
  },
  render: (args) =>
    `<usps-icon size="${args.size}" color="${args.color}">${svgIcon}</usps-icon>`,
};

export const Large: Story = {
  args: {
    size: 'lg',
    color: 'default',
  },
  render: (args) =>
    `<usps-icon size="${args.size}" color="${args.color}">${svgIcon}</usps-icon>`,
};

export const ExtraLarge: Story = {
  args: {
    size: 'xlg',
    color: 'default',
  },
  render: (args) =>
    `<usps-icon size="${args.size}" color="${args.color}">${svgIcon}</usps-icon>`,
};
