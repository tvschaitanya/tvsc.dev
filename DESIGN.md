# Chaitanya’s portfolio

## Identity and palette

Cloud & AI Engineer, with an interest in connecting business needs to technical decisions and balancing cost, reliability, and complexity. Do not add an aspiring-architect job title. Do not invent employers, project results, statistics, or published articles.

One complementary palette in both themes: cobalt `#2457EB`, orange `#EB8624`, paper `#F5F4F0`, deep ink `#141820`. Derived surface shades and 3D lighting stay within that system. No decorative asterisks or starbursts.

## Centered hero

A restrained personal introduction, not an oversized brand composition. Centered neutral-colored name (48–72px), small greeting, modest role, equally styled readable introduction paragraphs, and two actions. Blue appears only as the name’s period and the existing CTA. No sweeping underline, background arcs, decorative gradients, canvas, or forced full-screen height. GSAP provides a short entrance, with reduced-motion support.

## Page structure

- Hero: name, Cloud & AI Engineer role, two equal-style introductory paragraphs, contact action, and centered calls to action.
- About: full supplied biography and circular portrait on a contrasting blue-tinted ground.
- Projects: two introductory entries linking to heading-only write-up pages for the CCI chatbot and AWS migration plan.
- Skills: descriptions beneath category headings; Lucide category icons and icon/text technology tags.
- Blogs: minimal introduction for someone starting to write, plus a writing illustration and real Hashnode link.
- Contact: clear vertical text hierarchy, four equal contact links, and a conversation illustration on blue. Copyright is centered on a neutral footer with a circular smooth-scroll control.

Content stays in its owning Astro component, not a central data file. Shared styles are tokens and primitives; component styles are scoped. Header navigation is compact with theme controls. Refresh positioning follows the explicit URL anchor; a refresh without an anchor goes to the top.

## Verification preference

The owner runs the dev server and manual testing. No tests, builds, screenshots, or browser checks were run for the centered hero redesign.

## Link behavior

External web links open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`. Use HTTPS destinations. The shared Button detects absolute web URLs automatically; plain anchors must include these attributes explicitly. Internal page links and section anchors stay in the current tab. Email links use `mailto:` and the visitor’s configured email handler.
