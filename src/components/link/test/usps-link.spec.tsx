import { newSpecPage } from '@stencil/core/testing';
import { UspsLink } from '../usps-link';

describe('usps-link', () => {
  it('renders external indicator', async () => {
    const page = await newSpecPage({
      components: [UspsLink],
      html: `<usps-link href="#" external>Link</usps-link>`,
    });

    expect(page.root?.textContent).toContain('Link');
    expect(page.root?.shadowRoot?.textContent).toContain('opens in a new tab');
  });
});
