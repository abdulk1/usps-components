import { newSpecPage } from '@stencil/core/testing';
import { UspsDrawer } from '../usps-drawer';

describe('usps-drawer', () => {
  it('renders informative items and switches content', async () => {
    const items = JSON.stringify([
      { heading: 'One', description: 'Desc', content: '<p>First</p>' },
      { heading: 'Two', description: 'Desc', content: '<p>Second</p>' },
    ]);
    const page = await newSpecPage({
      components: [UspsDrawer],
      html: `<usps-drawer variant="informative" items='${items}'></usps-drawer>`,
    });

    const spy = jest.fn();
    page.root?.addEventListener('uspsChange', spy);

    expect(page.root?.shadowRoot?.textContent).toContain('First');
    const buttons = page.root?.shadowRoot?.querySelectorAll('button.drawer-nav-item');
    (buttons?.[1] as HTMLButtonElement)?.click();
    await page.waitForChanges();

    expect(spy).toHaveBeenCalledWith(expect.any(CustomEvent));
    expect(page.root?.shadowRoot?.textContent).toContain('Second');
  });

  it('toggles detailed drawer', async () => {
    const page = await newSpecPage({
      components: [UspsDrawer],
      html: `<usps-drawer heading="Details" variant="detailed">Body</usps-drawer>`,
    });

    const spy = jest.fn();
    page.root?.addEventListener('uspsToggle', spy);
    const header = page.root?.shadowRoot?.querySelector('button.drawer-header') as HTMLButtonElement;
    header?.click();
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();
    expect(page.root?.textContent).toContain('Body');
  });
});
