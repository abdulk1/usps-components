import { newSpecPage } from '@stencil/core/testing';
import { UspsToggle } from '../usps-toggle';

describe('usps-toggle', () => {
  it('emits change event', async () => {
    const page = await newSpecPage({
      components: [UspsToggle],
      html: `<usps-toggle label="Toggle"></usps-toggle>`,
    });

    const spy = jest.fn();
    page.root?.addEventListener('uspsChange', spy);
    const input = page.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    input?.dispatchEvent(new Event('change'));
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();
  });
});
