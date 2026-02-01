import { newSpecPage } from '@stencil/core/testing';
import { UspsModal } from '../usps-modal';

describe('usps-modal', () => {
  it('emits close event', async () => {
    const page = await newSpecPage({
      components: [UspsModal],
      html: `<usps-modal open heading="Title">Body</usps-modal>`,
    });

    const spy = jest.fn();
    page.root?.addEventListener('uspsClose', spy);
    const close = page.root?.shadowRoot?.querySelector('button.modal-close') as HTMLButtonElement;
    close?.click();
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();
    expect(page.root?.open).toBe(false);
  });
});
