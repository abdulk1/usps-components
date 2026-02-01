import { newSpecPage } from '@stencil/core/testing';
import { UspsFormField } from '../usps-form-field';

describe('usps-form-field', () => {
  it('renders label, hint, and error', async () => {
    const page = await newSpecPage({
      components: [UspsFormField],
      html: `<usps-form-field label="Name" hint="Hint" error="Error" required></usps-form-field>`,
    });

    expect(page.root?.shadowRoot?.textContent).toContain('Name');
    expect(page.root?.shadowRoot?.textContent).toContain('Hint');
    expect(page.root?.shadowRoot?.textContent).toContain('Error');
  });
});
