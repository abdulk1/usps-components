# USPS Design System

A framework-agnostic web components library built with [Stencil](https://stenciljs.com/), implementing the USPS digital style guide. Components are usable in React, Vue, Angular, and vanilla JavaScript applications. For React usage, see `react/README.md`.

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

```bash
npm start
```

### Build

```bash
npm run build
```

### Storybook

```bash
npm run storybook
```

Storybook runs at `http://localhost:6006` with all component stories, interactive controls, and accessibility checks.
The published Storybook is deployed to GitHub Pages at `https://<org>.github.io/usps-components/`.

## Architecture

- **Stencil 4.x** — Web Component compiler with Shadow DOM
- **TypeScript** — Strict mode enabled
- **CSS Custom Properties** — All styling driven by design tokens
- **Storybook 8.x** — Documentation and visual testing with a11y addon

## Project Structure

```
src/
  tokens/         Design tokens (colors, typography, spacing, radii)
  themes/         Light and dark theme overrides
  global/         Global stylesheet (imports tokens + themes)
  components/     21 web components (Shadow DOM, .tsx + .css each)
  stories/        Storybook stories (one per component)
```

## Design Tokens

All tokens are exposed as CSS custom properties on `:root`. See `src/tokens/tokens.css` for the full list.

| Category    | Example                            |
|-------------|------------------------------------|
| Colors      | `--usps-color-primary: #333366`    |
| Typography  | `--usps-font-size-body: 16px`      |
| Spacing     | `--usps-space-16: 16px`            |
| Radius      | `--usps-radius-xsm: 4px`          |
| Icon sizes  | `--usps-icon-size-sm: 24px`        |

## Theming

Switch themes via the `<usps-theme>` component or `data-theme` attribute:

```html
<usps-theme theme="dark">
  <usps-button variant="primary">Click me</usps-button>
</usps-theme>
```

Supported themes: `light` (default), `dark`.

## Components

### Foundational
| Component         | Tag               | Description                          |
|-------------------|-------------------|--------------------------------------|
| Button            | `usps-button`     | Primary, secondary, ecommerce, inactive variants |
| Link              | `usps-link`       | Body, heading, ecommerce variants    |
| Icon              | `usps-icon`       | SVG slot with size/color props       |
| Spinner           | `usps-spinner`    | Animated loading indicator           |
| Badge             | `usps-badge`      | Info, success, warning, error labels |

### Form
| Component         | Tag               | Description                          |
|-------------------|-------------------|--------------------------------------|
| Input             | `usps-input`      | Text input with label, error states  |
| Textarea          | `usps-textarea`   | Multi-line text input                |
| Select            | `usps-select`     | Dropdown with JSON options           |
| Checkbox          | `usps-checkbox`   | Custom styled checkbox               |
| Radio             | `usps-radio`      | Custom styled radio button           |
| Toggle            | `usps-toggle`     | On/off switch                        |
| Form Field        | `usps-form-field` | Label, hint, error wrapper           |

### Layout
| Component         | Tag               | Description                          |
|-------------------|-------------------|--------------------------------------|
| Card              | `usps-card`       | Large, small, image variants         |
| Divider           | `usps-divider`    | Horizontal/vertical separator        |
| Grid              | `usps-grid`       | CSS Grid layout                      |
| Stack             | `usps-stack`      | Flexbox row/column layout            |
| Container         | `usps-container`  | Max-width centered container         |
| Banner            | `usps-banner`     | Hero/marketing content banner        |
| Callout           | `usps-callout`    | Single or multi-column callouts      |
| Drawer            | `usps-drawer`     | Informative/detailed drawers         |

### Application
| Component         | Tag                    | Description                       |
|-------------------|------------------------|-----------------------------------|
| Application Nav   | `usps-application-nav` | In-app navigation (desktop/mobile) |

### Feedback
| Component         | Tag               | Description                          |
|-------------------|-------------------|--------------------------------------|
| Alert             | `usps-alert`      | Info, success, warning, error alerts |
| Toast             | `usps-toast`      | Auto-dismiss notifications           |
| Tooltip           | `usps-tooltip`    | Hover/focus tooltip                  |
| Modal             | `usps-modal`      | Dialog with focus trap, overlay      |

## Usage

### Vanilla HTML

```html
<script type="module" src="dist/usps-components/usps-components.esm.js"></script>

<usps-button variant="primary">Submit</usps-button>
<usps-alert variant="success" heading="Done">Your form was submitted.</usps-alert>
```

### With a bundler

```js
import { defineCustomElements } from 'usps-components/loader';
defineCustomElements();
```

## Frameworks

### React

React bindings are generated via Stencil’s React output target. See `react/README.md` for setup and usage.

### Vue

Vue bindings are not yet implemented. Track progress in `TODO.md`.

### Angular

Angular bindings are not yet implemented. Track progress in `TODO.md`.

## Scripts

| Script              | Description                          |
|---------------------|--------------------------------------|
| `npm run build`     | Stencil production build             |
| `npm start`         | Dev server with watch mode           |
| `npm run storybook` | Launch Storybook dev server          |
| `npm run build-storybook` | Build static Storybook site    |
| `npm run lint`      | Run ESLint                           |
| `npm run format`    | Run Prettier                         |

## License

MIT
