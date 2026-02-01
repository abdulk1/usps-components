import { newSpecPage } from '@stencil/core/testing';
import { UspsToast } from '../usps-toast';

describe('usps-toast', () => {
  it('emits dismiss', async () => {
    const page = await newSpecPage({
      components: [UspsToast],
      html: `<usps-toast open duration="0">Toast</usps-toast>`,
    });

    const spy = jest.fn();
    page.root?.addEventListener('uspsDismiss', spy);
    const button = page.root?.shadowRoot?.querySelector('button.toast-dismiss') as HTMLButtonElement;
    button?.click();
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();
  });
});
