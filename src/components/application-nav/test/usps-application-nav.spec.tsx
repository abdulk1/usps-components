import { newSpecPage } from '@stencil/core/testing';
import { UspsApplicationNav } from '../usps-application-nav';

describe('usps-application-nav', () => {
  it('renders active desktop link', async () => {
    const items = JSON.stringify([
      { label: 'One', href: '#', active: true },
      { label: 'Two', href: '#' },
    ]);
    const page = await newSpecPage({
      components: [UspsApplicationNav],
      html: `<usps-application-nav title="App" items='${items}'></usps-application-nav>`,
    });

    const active = page.root?.shadowRoot?.querySelector('.app-nav-item.active');
    expect(active).toBeTruthy();
    expect(page.root?.shadowRoot?.textContent).toContain('App');
  });

  it('emits navigate event on mobile select', async () => {
    const items = JSON.stringify([
      { label: 'Section 1', href: '#1' },
      { label: 'Section 2', href: '#2' },
    ]);
    const page = await newSpecPage({
      components: [UspsApplicationNav],
      html: `<usps-application-nav layout="mobile" items='${items}'></usps-application-nav>`,
    });

    const spy = jest.fn();
    page.root?.addEventListener('uspsNavigate', spy);
    const select = page.root?.shadowRoot?.querySelector('select') as HTMLSelectElement;
    select.value = '1';
    select.dispatchEvent(new Event('change'));
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();
  });
});
