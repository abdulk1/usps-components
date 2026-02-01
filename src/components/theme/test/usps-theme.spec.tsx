import { newSpecPage } from '@stencil/core/testing';
import { UspsTheme } from '../usps-theme';

describe('usps-theme', () => {
  it('sets data-theme attribute', async () => {
    const page = await newSpecPage({
      components: [UspsTheme],
      html: `<usps-theme theme="dark"></usps-theme>`,
    });

    expect(page.root?.getAttribute('data-theme')).toBe('dark');
  });
});
