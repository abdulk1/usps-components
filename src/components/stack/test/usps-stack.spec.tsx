import { newSpecPage } from '@stencil/core/testing';
import { UspsStack } from '../usps-stack';

describe('usps-stack', () => {
  it('applies layout styles', async () => {
    const page = await newSpecPage({
      components: [UspsStack],
      html: `<usps-stack direction="row" gap="12px" align="center"></usps-stack>`,
    });

    const stack = page.root?.shadowRoot?.querySelector('.usps-stack') as HTMLElement;
    expect(stack?.style.flexDirection).toBe('row');
    expect(stack?.style.gap).toBe('12px');
    expect(stack?.style.alignItems).toBe('center');
  });
});
