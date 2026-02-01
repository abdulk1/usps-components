import { newSpecPage } from '@stencil/core/testing';
import { UspsBanner } from '../usps-banner';

describe('usps-banner', () => {
  it('renders heading and subtitle', async () => {
    const page = await newSpecPage({
      components: [UspsBanner],
      html: `<usps-banner heading="Title" subtitle="Summary"></usps-banner>`,
    });

    expect(page.root?.shadowRoot?.textContent).toContain('Title');
    expect(page.root?.shadowRoot?.textContent).toContain('Summary');
  });
});
