# Chaitanya’s portfolio

Personal cloud and AI engineering portfolio. Preserve the supplied biography, education, skills, and contact information. No invented employers, projects, statistics, or article titles.

## Visual direction

The principal references are Sruthi’s portfolio (personal presence, expressive typography, drawn annotations) and React.gg (tactile illustrations, bold framing, explorable objects). The result is original rather than a reproduction. No stock portrait stands in for Chaitanya.

One complementary palette is used in both themes:

- Cobalt blue: `#2457EB`
- Warm orange: `#EB8624`
- Paper white: `#F5F4F0`
- Deep ink: `#141820`

Light and dark themes swap neutral background/text assignments. Brand colors stay identical. Surface, line, and muted values are mixtures of these same base colors. Blue leads; orange marks contrast and selected details. Funnel Display / Funnel Sans and DM Mono form the shared typography system.

## Sections and components

- Hero: Chaitanya’s name leads. A drawn underline, personal introduction, and custom engineering illustration deck establish the identity.
- EngineeringDeck: selectable Cloud, AI, and Delivery cards. Three original SVG illustrations. Button controls work with touch and keyboard; no drag-only interaction.
- About: original biography with a paper-style education panel, blue shadow, and orange detail.
- Skills: the six complete skill groups remain readable, with tactile icon blocks and tool tags.
- Blogs: a custom notebook treatment links directly to the real Hashnode blog.
- Contact: a blue closing section with real email/social links.

## Motion

GSAP provides a short hero entrance and interruptible 250ms state changes in the deck. CSS provides fine-pointer hover and press feedback. Keyboard selection switches immediately. Reduced-motion preferences disable spatial animation. No continuous decorative loops, scroll interception, or artificial loading screens.

## Maintenance

Copy: each section’s `.astro` frontmatter or markup. Composition: `src/pages/index.astro`. Shell: `src/layouts/BaseLayout.astro`. Shared palette/primitives: `src/styles/global.css`. Each component owns its scoped CSS. Interactive behavior is split between `src/scripts/engineering-deck.ts`, `motion.ts`, `navigation.ts`, and `theme.ts`.

The user will run the dev server and perform manual testing. No build, automated audit, screenshot, or browser test was run for this redesign at the user’s request.

The decorative hero bottom strip and the separate systems section were removed at the owner’s request. About leads directly into Skills.

## Motion refinement

GSAP timelines coordinate the existing artwork. The name leads the hero, support fades together, the card deck settles, and the underline draws. Deck selection shuffles the three cards together in 280ms, retaining rendered positions during rapid changes. Keyboard selection remains immediate.

The writing illustration builds four lines alongside one short pencil gesture. Contact presents hello, then its reply. ScrollTrigger starts each illustration story once; no endless loops or scroll-linked reading text. The paper, envelope, shadows, and orbit stay static. MatchMedia reverts motion when reduced motion is enabled. Animation modules clean up on page exit and hot replacement.

Timeline: hero name 0–660ms; supporting details and deck 80–730ms; underline 250–700ms. Writing lines 0–810ms; pencil 0–770ms. Hello 0–550ms; reply 180–580ms; reply dots 450–980ms. No parent and child entrances are layered on the same illustration.

Manual feel checks for the owner: rapidly switch cards to judge shuffle continuity; scroll to Blogs and Contact to judge the writing/reply timing. No tests, build, server, or browser session was run for this refinement.

Section content is colocated with its component. The central `src/data/portfolio.ts` file was removed at the owner’s request. Header navigation, footer contacts, and layout metadata each reside in their respective components.

## Architectural direction without a job-title change

Keep “Cloud & AI Engineer.” The hero introduction connects business needs to technical solutions; the supporting line describes balancing cost, reliability, and complexity through hands-on experience. There is no aspiring-architect title or claim of holding that role.

`SystemsVisual.astro` replaces the deck with a conceptual isometric cloud/AI workbench: an application, cloud, database, and AI processor share a connected platform. GSAP MotionPath drives three brief signal passes and then rests. The visual has no buttons, rotating cards, asterisks, fake metrics, or simulated deployment status. Reduced motion leaves a complete still illustration. This supersedes earlier card-stack notes.

No tests, builds, dev server, or browser checks run for this change, per the owner’s preference.
