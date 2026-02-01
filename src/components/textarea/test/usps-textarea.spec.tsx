import { newSpecPage } from '@stencil/core/testing';
import { UspsTextarea } from '../usps-textarea';

describe('usps-textarea', () => {
  it('emits input and change events', async () => {
    const page = await newSpecPage({
      components: [UspsTextarea],
      html: `<usps-textarea></usps-textarea>`,
    });

    const inputSpy = jest.fn();
    const changeSpy = jest.fn();
    page.root?.addEventListener('uspsInput', inputSpy);
    page.root?.addEventListener('uspsChange', changeSpy);

    const textarea = page.root?.shadowRoot?.querySelector('textarea') as HTMLTextAreaElement;
    textarea.value = 'Hello';
    textarea.dispatchEvent(new Event('input'));
    textarea.dispatchEvent(new Event('change'));
    await page.waitForChanges();

    expect(inputSpy).toHaveBeenCalled();
    expect(changeSpy).toHaveBeenCalled();
  });
});
