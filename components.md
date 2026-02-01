# Components Catalog

## Sources Reviewed
- https://www.usps.com/styleguide/elements/
- https://www.usps.com/styleguide/elements/navigation.htm
- https://www.usps.com/styleguide/elements/buttons-links.htm
- https://www.usps.com/styleguide/elements/static-components.htm
- https://www.usps.com/styleguide/elements/application-components.htm
- https://www.usps.com/styleguide/assets/pdf/Elements-Section.pdf (legacy redirects)

## Implemented (Mapped to Elements)
- Buttons: `usps-button` (primary, secondary, ecommerce, inactive, icon-combo, ecommerce-icon).
- Links: `usps-link` (basic body/banner link styling).
- Form field elements: `usps-input`, `usps-textarea`, `usps-select`, `usps-checkbox`, `usps-radio`, `usps-toggle`, `usps-form-field`.
- On-screen messaging: `usps-alert` (info, success, warning, error).
- Cards: `usps-card` (large, small, image variants).
- Modal: `usps-modal` (basic dialog).
- Application navigation: `usps-application-nav` (desktop + mobile go-to dropdown).
- Static components: `usps-banner`, `usps-callout`, `usps-drawer`.

## Implemented (Library Components Not Called Out in Elements)
- Layout/utilities: `usps-container`, `usps-grid`, `usps-stack`, `usps-divider`.
- UI helpers: `usps-icon`, `usps-spinner`, `usps-badge`, `usps-tooltip`, `usps-toast`, `usps-theme`.

## Missing or Not Yet Modeled
- Navigation: global header, utility bar, primary navigation/mega menu, global footer, global alert bar.
- Buttons & links: linked-heading link treatment.
- Static components: one-column centered short section, bottom-of-page CTAs, expanding detailed drawers/accordions, alternating copy + graphic blocks, back-to-top jump link, text areas (1- and 2-column with callout).
- Application components: progress bar & steps, pagination & results-per-page, transparent overlays, loader processing modal, calendar/date picker, required-field indicator pattern, quantity picker.
- Headings & text: heading/text styles are not encapsulated as components.

## Alignment Notes
- Button hover states follow the style guide (background hover gray #EDEDED with text color shift for primary/secondary/ecommerce).
- Alert colors match the in-page alert specs: info #E7F6F8/#3573B1, success #ECF3EC/#218748, warning #FAF3D1/#FFBE2E, error #F4E3DB/#E71921.
