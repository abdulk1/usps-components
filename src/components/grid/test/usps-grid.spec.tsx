import { newSpecPage } from '@stencil/core/testing';
import { UspsGrid } from '../usps-grid';

describe('usps-grid', () => {
  it('applies grid styles', async () => {
    const page = await newSpecPage({
      components: [UspsGrid],
      html: `<usps-grid columns="repeat(3, 1fr)" gap="24px"></usps-grid>`,
    });

    const grid = page.root?.shadowRoot?.querySelector('.usps-grid') as HTMLElement;
    expect(grid?.style.gridTemplateColumns).toBe('repeat(3, 1fr)');
    expect(grid?.style.gap).toBe('24px');
  });
});
