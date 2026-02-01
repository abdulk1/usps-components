# TODO

## High Priority

- [ ] **Framework bindings** — Add Stencil output targets for Angular and Vue wrapper packages (`@stencil/angular-output-target`, `@stencil/vue-output-target`)
- [ ] **Unit tests** — Add Jest/Stencil testing for all components (props, events, state changes, slot rendering)
- [x] **Accessibility audit** — Run axe-core or Lighthouse audits against every component and fix any WCAG 2.1 AA violations
- [ ] **Keyboard navigation testing** — Verify Tab/Enter/Escape/Arrow key behavior for all interactive components (modal, select, radio, toggle, tooltip)
- [ ] **Focus trap in modal** — Current focus trap uses `shadowRoot.querySelectorAll`; improve to handle slotted focusable content
 
## Completed

- [x] **React bindings** — Added Stencil React output target and wrapper package scaffolding
- [x] **Storybook GitHub Pages** — Deploy Storybook via GitHub Actions to Pages

## Design Token Gaps

- [ ] **Elevation / shadow tokens** — Add `--usps-shadow-sm`, `--usps-shadow-md`, `--usps-shadow-lg` tokens (not yet in tokens.css)
- [ ] **Motion / animation tokens** — Add `--usps-duration-fast`, `--usps-duration-normal`, `--usps-easing-default` tokens; replace hardcoded `0.2s` transitions
- [ ] **Semantic color tokens** — Add tokens like `--usps-color-text-primary`, `--usps-color-text-disabled`, `--usps-color-border-input` that map to primitives

## Component Improvements

- [ ] **Select component** — Accept options as a JS array (not just JSON string attribute); add search/filter for long lists
- [ ] **Toast component** — Add stacking support for multiple toasts; animate exit
- [ ] **Modal component** — Add `size` prop (sm/md/lg/full) instead of raw `width`; add scroll lock on body when open
- [ ] **Tooltip component** — Add collision detection to reposition when near viewport edge
- [ ] **Form field component** — Wire up `for`/`id` association between label and slotted input
- [ ] **Icon component** — Add a built-in icon set (SVG sprite or individual SVGs) so consumers don't always need to slot custom SVGs
- [ ] **Button component** — Add `loading` prop that shows a spinner and disables interaction

## Documentation

- [ ] **Per-component docs** — Add usage examples, events, slots, and accessibility notes to each component's auto-generated `readme.md`
- [ ] **Storybook interaction tests** — Add play functions to stories for automated interaction testing
- [ ] **Migration / integration guide** — Document how to consume the library in React, Vue, Angular, and vanilla JS projects
- [ ] **Changelog** — Set up conventional commits and auto-changelog generation

## Build & CI

- [ ] **CI pipeline** — Add GitHub Actions for build, lint, test, and Storybook deploy on PR
- [ ] **Visual regression testing** — Add Chromatic or Percy for screenshot comparison
- [ ] **npm publishing** — Configure package for publishing to npm (scope, registry, provenance)
- [ ] **Bundle size tracking** — Add size-limit or bundlesize checks to CI
- [ ] **ESLint + Prettier** — Install `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` dev deps (referenced in `.eslintrc.json` but not installed)

## Future Enhancements (Out of Scope for v1)

- [ ] Figma token sync automation
- [ ] Mobile-native bindings
- [ ] Visual regression CI with Chromatic
- [ ] Component usage analytics
- [ ] Dark theme color refinement with actual USPS brand guidance
