# Repository Guidelines

## Project Structure & Module Organization

This repository contains a static Kling Systems marketing site built with Vite, vanilla JavaScript, CSS, and GSAP.

- `index.html`: semantic page structure, Norwegian customer-facing copy, and SEO metadata.
- `styles.css`: design tokens, responsive layouts, component styling, and motion fallbacks.
- `script.js`: navigation, accordions, solution controls, form validation, and GSAP animations.
- `assets/`: the single source for all landing-page media, including Kling logos, generated illustrations, mascot artwork, and other brand assets. Store new image-model outputs here with descriptive kebab-case filenames, for example `kling-about-workflow.png`, and reference them with relative paths such as `./assets/kling-about-workflow.png`.
- `scripts/check.mjs`: lightweight structural and accessibility checks.
- `PRODUCT.md`: product positioning, users, constraints, and verified claims.
- `DESIGN.md`: visual system, typography, component rules, and motion direction.
- `dist/`: generated production output. Do not edit or commit it.

## Build, Test, and Development Commands

Run commands from the repository root:

```bash
npm install       # Install Vite and GSAP dependencies
npm run dev       # Start the local Vite server
npm run check     # Run structural, language, SEO, and accessibility checks
npm run build     # Create an optimized production build in dist/
npm run preview   # Preview the production build locally
```

Before submitting changes, run both `npm run check` and `npm run build`.

## Coding Style & Naming Conventions

Use two-space indentation in HTML, CSS, and JavaScript. Prefer semantic HTML and small, focused JavaScript functions. Use `camelCase` for JavaScript variables and functions, and kebab-case with BEM-style modifiers for CSS, such as `.service-card--automation` and `.is-expanded`.

Keep reusable colors, spacing, radii, and easing values in `:root`. Avoid inline styles and unexplained magic values. All public-facing copy must be natural Norwegian. Preserve the terminology and claims defined in `PRODUCT.md` and the visual rules in `DESIGN.md`.

Do not hotlink production images or add generic stock imagery. Place every approved visual in `assets/`, optimize it for its rendered size, provide meaningful Norwegian alternative text when the image conveys information, and use empty alternative text for purely decorative artwork. Preserve original brand files and use a new filename for generated replacements.

### Iconography

Use Phosphor Icons for all new interface icons. Install or import icons from the official Phosphor package appropriate to the current stack, and import only the icons used by the page. Do not introduce another icon family or add hand-drawn SVG icons when a suitable Phosphor icon exists. Keep icon weight, size, and color consistent within each component. Decorative icons must use `aria-hidden="true"`; meaningful icon-only controls require a Norwegian accessible label.

## Testing Guidelines

There is no unit-test framework or coverage threshold yet. Extend `scripts/check.mjs` when adding testable structural requirements. Manually verify desktop and mobile layouts, keyboard navigation, the mobile menu, service accordions, solution controls, reduced-motion behavior, and contact-form states. Confirm there are no console errors or horizontal overflow.

## Production Deployment

The repository owner authorizes production publishing after requested changes. Once `npm run check` and `npm run build` pass, commit the complete in-scope change and push it directly to `main`, which is the Vercel production branch. Do not leave verified website changes only in the local worktree unless the user explicitly asks to keep them local. Report the commit hash and push result after publishing.

## Commit & Pull Request Guidelines

The repository has no established commit history. Use concise Conventional Commit messages, for example `feat: add service accordion` or `fix: prevent mobile hero overflow`.

Pull requests should include a short purpose statement, testing performed, linked issue when applicable, and before/after screenshots for visual changes at desktop and mobile widths. Do not include fabricated customer claims, secrets, `node_modules/`, or generated `dist/` files.
