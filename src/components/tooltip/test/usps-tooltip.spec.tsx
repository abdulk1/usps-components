import { newSpecPage } from '@stencil/core/testing';
import { UspsTooltip } from '../usps-tooltip';

describe('usps-tooltip', () => {
  it('shows and hides tooltip', async () => {
    const page = await newSpecPage({
      components: [UspsTooltip],
      html: `<usps-tooltip content="Tip"><button>Target</button></usps-tooltip>`,
    });

    const wrapper = page.root?.shadowRoot?.querySelector('.usps-tooltip-wrapper') as HTMLElement;
    wrapper?.dispatchEvent(new Event('mouseenter'));
    await page.waitForChanges();
    expect(page.root?.shadowRoot?.textContent).toContain('Tip');

    wrapper?.dispatchEvent(new Event('mouseleave'));
    await page.waitForChanges();
    expect(page.root?.shadowRoot?.textContent).not.toContain('Tip');
  });
});
