import { newSpecPage } from '@stencil/core/testing';
import { UspsContainer } from '../usps-container';

describe('usps-container', () => {
  it('applies size class', async () => {
    const page = await newSpecPage({
      components: [UspsContainer],
      html: `<usps-container size="sm"></usps-container>`,
    });

    const container = page.root?.shadowRoot?.querySelector('.usps-container');
    expect(container?.classList.contains('size-sm')).toBe(true);
  });
});
