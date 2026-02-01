import { newSpecPage } from '@stencil/core/testing';
import { UspsInput } from '../usps-input';

describe('usps-input', () => {
  it('emits input and change events', async () => {
    const page = await newSpecPage({
      components: [UspsInput],
      html: `<usps-input></usps-input>`,
    });

    const input = page.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    const inputSpy = jest.fn();
    const changeSpy = jest.fn();
    page.root?.addEventListener('uspsInput', inputSpy);
    page.root?.addEventListener('uspsChange', changeSpy);

    input.value = 'Hello';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new Event('change'));
    await page.waitForChanges();

    expect(inputSpy).toHaveBeenCalled();
    expect(changeSpy).toHaveBeenCalled();
  });
});
