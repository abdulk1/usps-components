import { newSpecPage } from '@stencil/core/testing';
import { UspsSpinner } from '../usps-spinner';

describe('usps-spinner', () => {
  it('applies size and color classes', async () => {
    const page = await newSpecPage({
      components: [UspsSpinner],
      html: `<usps-spinner size="lg" color="white"></usps-spinner>`,
    });

    const spinner = page.root?.shadowRoot?.querySelector('.usps-spinner');
    expect(spinner?.classList.contains('size-lg')).toBe(true);
    expect(spinner?.classList.contains('color-white')).toBe(true);
  });
});
