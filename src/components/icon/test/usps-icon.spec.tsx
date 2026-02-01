import { newSpecPage } from '@stencil/core/testing';
import { UspsIcon } from '../usps-icon';

describe('usps-icon', () => {
  it('applies size and color classes', async () => {
    const page = await newSpecPage({
      components: [UspsIcon],
      html: `<usps-icon size="lg" color="warning"></usps-icon>`,
    });

    const icon = page.root?.shadowRoot?.querySelector('.usps-icon');
    expect(icon?.classList.contains('size-lg')).toBe(true);
    expect(icon?.classList.contains('color-warning')).toBe(true);
  });
});
