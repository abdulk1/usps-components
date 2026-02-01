import { newSpecPage } from '@stencil/core/testing';
import { UspsRadio } from '../usps-radio';

describe('usps-radio', () => {
  it('emits change event', async () => {
    const page = await newSpecPage({
      components: [UspsRadio],
      html: `<usps-radio label="Option" value="one"></usps-radio>`,
    });

    const spy = jest.fn();
    page.root?.addEventListener('uspsChange', spy);
    const input = page.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    input?.dispatchEvent(new Event('change'));
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();
  });
});
