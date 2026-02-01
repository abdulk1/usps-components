import { newSpecPage } from '@stencil/core/testing';
import { UspsCallout } from '../usps-callout';

describe('usps-callout', () => {
  it('renders heading', async () => {
    const page = await newSpecPage({
      components: [UspsCallout],
      html: `<usps-callout heading="Heading"></usps-callout>`,
    });

    expect(page.root?.shadowRoot?.textContent).toContain('Heading');
  });
});
