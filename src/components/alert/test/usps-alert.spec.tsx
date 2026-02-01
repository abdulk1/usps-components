import { newSpecPage } from '@stencil/core/testing';
import { UspsAlert } from '../usps-alert';

describe('usps-alert', () => {
  it('renders heading and variant', async () => {
    const page = await newSpecPage({
      components: [UspsAlert],
      html: `<usps-alert heading="Notice" variant="warning">Body</usps-alert>`,
    });

    const alert = page.root?.shadowRoot?.querySelector('.usps-alert');
    expect(alert).toBeTruthy();
    expect(alert?.classList.contains('variant-warning')).toBe(true);
    expect(page.root?.shadowRoot?.textContent).toContain('Notice');
    expect(page.root?.textContent).toContain('Body');
  });

  it('dismisses and emits event', async () => {
    const page = await newSpecPage({
      components: [UspsAlert],
      html: `<usps-alert dismissible>Body</usps-alert>`,
    });

    const spy = jest.fn();
    page.root?.addEventListener('uspsDismiss', spy);
    const button = page.root?.shadowRoot?.querySelector('button.alert-dismiss') as HTMLButtonElement;
    button?.click();
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();
    expect(page.root?.shadowRoot?.querySelector('.usps-alert')).toBeNull();
  });
});
