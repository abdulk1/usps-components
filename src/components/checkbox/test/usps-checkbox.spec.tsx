import { newSpecPage } from '@stencil/core/testing';
import { UspsCheckbox } from '../usps-checkbox';

describe('usps-checkbox', () => {
  it('toggles and emits change', async () => {
    const page = await newSpecPage({
      components: [UspsCheckbox],
      html: `<usps-checkbox label="Agree"></usps-checkbox>`,
    });

    const spy = jest.fn();
    page.root?.addEventListener('uspsChange', spy);
    const input = page.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    input?.dispatchEvent(new Event('change'));
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();
    expect(input.checked).toBe(true);
  });
});
