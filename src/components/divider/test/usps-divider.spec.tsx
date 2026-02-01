import { newSpecPage } from '@stencil/core/testing';
import { UspsDivider } from '../usps-divider';

describe('usps-divider', () => {
  it('applies orientation and color', async () => {
    const page = await newSpecPage({
      components: [UspsDivider],
      html: `<usps-divider orientation="vertical" color="#ff0000"></usps-divider>`,
    });

    const divider = page.root?.shadowRoot?.querySelector('hr');
    expect(divider?.classList.contains('orientation-vertical')).toBe(true);
    expect(divider?.getAttribute('style')).toContain('background-color: #ff0000');
  });
});
