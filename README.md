# Chaitanya’s Portfolio

A single-page Astro portfolio with reusable components, two color themes, and GSAP motion.

## Development

Use pnpm to keep the lockfile consistent:

```sh
pnpm install
pnpm dev --background
```

Manage the background server with:

```sh
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

## Checks and build

```sh
pnpm check
pnpm build
```

The static site is generated in `dist/`.

## Where to make changes

| File or directory | Responsibility |
| --- | --- |
| Each section’s `.astro` frontmatter | That section’s copy, links, and lists |
| `src/pages/index.astro` | Section order and page composition |
| `src/layouts/BaseLayout.astro` | Shared HTML shell, metadata, font loading, header, and footer |
| `src/components/sections/` | Hero, About, Projects, Skills, and Blogs sections with scoped styles |
| `src/components/Header.astro` | Responsive navigation |
| `src/components/Footer.astro` | Contact section, email, social links, and footer |
| `src/components/ThemeToggle.astro` | Accessible light/dark theme controls |
| `src/components/ui/` | Reusable button, icon, and section label |
| `src/styles/global.css` | Theme tokens, typography, spacing, shared page primitives |
| `src/scripts/` | Separate theme, navigation, and GSAP motion modules |
| `src/components/sections/Hero.astro` | Centered introduction, typography, background, and calls to action |
| `DESIGN.md` | Visual direction, motion decisions, and maintenance notes |

Each section owns its scoped CSS. Shared colors and fonts are changed through the tokens in `global.css`.

## Design and interaction

A single blue/orange complementary palette powers both themes. Change its four base colors in `src/styles/global.css`; theme-specific surfaces derive from those colors.

The hero uses a short GSAP entrance. The hero is a centered typographic composition. `src/scripts/motion.ts` coordinates its short text entrance and underline animation. It has no canvas or 3D scene. Hover motion is limited to precise pointers, and reduced-motion preferences disable spatial effects. Reading content stays still while scrolling.

All biography and contact information comes from the supplied content. The Blogs section links directly to Hashnode; it does not invent article titles or publication dates.

Manual testing and running the dev server are handled by the owner. No tests or builds were run for the previous redesign, as requested.

## Editing section content

Content lives at the top of the component that renders it, inside its Astro frontmatter (`---`):

- `Hero.astro`: name, role, and introduction.
- `About.astro`: biography and portrait path.
- `Projects.astro`: project entries.
- `Skills.astro`: skill descriptions and tool lists.
- `Blogs.astro`: Hashnode URL; the short copy is in its markup.
- `Footer.astro`: contact description, email, and social links.
- `Header.astro`: site name and navigation items.
- `BaseLayout.astro`: page title and social metadata.

There is no central content file. If you change a repeated identity detail such as your name, also update the header, footer, and page metadata where appropriate.
# tvsc.dev
