# USPS Components React

React bindings for `usps-components` generated via the Stencil React output target.

## Install

```bash
npm install usps-components usps-components-react
```

## Usage

```tsx
import React from 'react';
import { UspsButton, UspsBanner, defineCustomElements } from 'usps-components-react';

defineCustomElements();

export function Example() {
  return (
    <UspsBanner heading="Page Title" subtitle="Supporting copy">
      <div slot="actions">
        <UspsButton variant="primary">Primary CTA</UspsButton>
        <UspsButton variant="secondary">Secondary CTA</UspsButton>
      </div>
    </UspsBanner>
  );
}
```

Notes:
- Call `defineCustomElements()` once at app startup.
- Use `slot` attributes for slotted content in React.
