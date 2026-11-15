/** The section crossing the header controls the navigation, including Contact in the footer. */
export function initNavigation() {
  const links = [...document.querySelectorAll<HTMLAnchorElement>('.nav-link')];
  const sections = [...document.querySelectorAll<HTMLElement>('main > section[id], footer[id]')];
  let queued = false;
  const update = () => {
    const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 88;
    let current = 'home';
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= headerHeight + 120) current = section.id;
    }
    if (Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2) current = 'contact';
    links.forEach(link => {
      const active = link.hash === `#${current}`;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    queued = false;
  };
  const schedule = () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  update();
}
