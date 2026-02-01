import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  viteFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      return {
        ...config,
        base: process.env.STORYBOOK_BASE || '/',
      };
    }
    return config;
  },
};

export default config;
