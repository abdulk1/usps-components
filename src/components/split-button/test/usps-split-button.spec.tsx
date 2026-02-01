import { newSpecPage } from '@stencil/core/testing';
import { UspsSplitButton } from '../usps-split-button';

describe('usps-split-button', () => {
  it('emits primary click and select', async () => {
    const page = await newSpecPage({
      components: [UspsSplitButton],
      html: `<usps-split-button></usps-split-button>`,
    });

    const primarySpy = jest.fn();
    const selectSpy = jest.fn();
    page.root?.addEventListener('uspsPrimaryClick', primarySpy);
    page.root?.addEventListener('uspsSelect', selectSpy);

    page.root!.options = [{ label: 'Option', value: 'one' }];
    await page.waitForChanges();

    const primary = page.root?.shadowRoot?.querySelector('button.split-primary') as HTMLButtonElement;
    primary?.click();
    await page.waitForChanges();
    expect(primarySpy).toHaveBeenCalled();

    (page.rootInstance as any).isOpen = true;
    await page.waitForChanges();
    const option = page.root?.shadowRoot?.querySelector('button.split-option') as HTMLButtonElement;
    expect(option).toBeTruthy();
    option?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();
    expect(selectSpy).toHaveBeenCalled();
  });
});
