import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'usps-components',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
    reactOutputTarget({
      componentCorePackage: 'usps-components',
      proxiesFile: 'react/src/components.ts',
      outDir: 'react/dist',
      includeDefineCustomElements: true,
    }),
  ],
  extras: {
    enableImportInjection: true,
  },
};
