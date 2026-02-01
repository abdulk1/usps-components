# Repository Guidelines

## Project Structure & Module Organization
- `src/components/`: Stencil components, each in `src/components/<name>/usps-<name>.tsx` with matching `usps-<name>.css` and a `readme.md`.
- `src/stories/`: Storybook stories, one per component (for example, `src/stories/usps-button.stories.ts`).
- `src/tokens/`, `src/themes/`, `src/global/`: design tokens, theme overrides, and shared CSS.
- Build outputs land in `dist/` and `loader/`; Storybook static output is `storybook-static/`.

## Build, Test, and Development Commands
- `npm start`: local dev server with watch mode and hot rebuilds.
- `npm run build`: production Stencil build into `dist/`.
- `npm run storybook`: Storybook dev server at `http://localhost:6006`.
- `npm run build-storybook`: static Storybook build in `storybook-static/`.
- `npm run lint`: ESLint for `src/**/*.ts` and `src/**/*.tsx`.
- `npm run format`: Prettier formatting for `src/**/*.{ts,tsx,css}`.

## Coding Style & Naming Conventions
- TypeScript is strict (`tsconfig.json`); keep types explicit and avoid unused locals/params.
- Prettier: 2-space indentation, single quotes, semicolons, trailing commas, print width 100.
- Naming: component tags and files use the `usps-` prefix (for example, `usps-card.tsx`).
- Co-locate CSS with the component and keep Storybook stories named `usps-<name>.stories.ts`.

## Testing Guidelines
- No automated unit tests are configured yet.
- Use Storybook for manual and accessibility checks; update/add stories with component changes.
- Run `npm run lint` before submitting changes.

## Commit & Pull Request Guidelines
- Commit messages are short, imperative, sentence-case (for example, “Fix WCAG 2.1 AA violations…”).
- Keep commits focused on a single change or feature.
- PRs should include: a concise description, linked issue (if any), and Storybook screenshots or a short screen capture for UI changes.

## Configuration Tips
- Design tokens live in `src/tokens/tokens.css` and are consumed via CSS custom properties.
- Themes are applied via `<usps-theme theme="dark">` or `data-theme` on a wrapper element.
