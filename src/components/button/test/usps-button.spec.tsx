import { newSpecPage } from '@stencil/core/testing';
import { UspsButton } from '../usps-button';

describe('usps-button', () => {
  it('emits click event', async () => {
    const page = await newSpecPage({
      components: [UspsButton],
      html: `<usps-button>Click</usps-button>`,
    });

    const spy = jest.fn();
    page.root?.addEventListener('uspsClick', spy);
    const button = page.root?.shadowRoot?.querySelector('button') as HTMLButtonElement;
    button?.click();
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('applies selected state', async () => {
    const page = await newSpecPage({
      components: [UspsButton],
      html: `<usps-button variant="icon-combo" selected>Selected</usps-button>`,
    });

    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button?.classList.contains('is-selected')).toBe(true);
  });
});
