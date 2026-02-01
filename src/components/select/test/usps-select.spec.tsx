import { newSpecPage } from '@stencil/core/testing';
import { UspsSelect } from '../usps-select';

describe('usps-select', () => {
  it('emits change event', async () => {
    const options = JSON.stringify([{ label: 'One', value: '1' }]);
    const page = await newSpecPage({
      components: [UspsSelect],
      html: `<usps-select options='${options}'></usps-select>`,
    });

    const spy = jest.fn();
    page.root?.addEventListener('uspsChange', spy);
    const select = page.root?.shadowRoot?.querySelector('select') as HTMLSelectElement;
    select.value = '1';
    select.dispatchEvent(new Event('change'));
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();
  });
});
