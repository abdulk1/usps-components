import { newSpecPage } from '@stencil/core/testing';
import { UspsBadge } from '../usps-badge';

describe('usps-badge', () => {
  it('renders label and variant', async () => {
    const page = await newSpecPage({
      components: [UspsBadge],
      html: `<usps-badge label="Info" variant="info"></usps-badge>`,
    });

    const badge = page.root?.shadowRoot?.querySelector('.usps-badge');
    expect(badge?.classList.contains('variant-info')).toBe(true);
    expect(badge?.textContent).toContain('Info');
  });
});
