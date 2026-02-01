import { newSpecPage } from '@stencil/core/testing';
import { UspsCard } from '../usps-card';

describe('usps-card', () => {
  it('renders heading and variant class', async () => {
    const page = await newSpecPage({
      components: [UspsCard],
      html: `<usps-card heading="Card" variant="small"></usps-card>`,
    });

    const card = page.root?.shadowRoot?.querySelector('.usps-card');
    expect(card?.classList.contains('variant-small')).toBe(true);
    expect(page.root?.shadowRoot?.textContent).toContain('Card');
  });
});
