import { gsap } from 'gsap';

/** Lead with the name; support arrives together, with no delayed interactive controls. */
export function initMotion() {
  const media = gsap.matchMedia();
  let entered = false;
  media.add('(prefers-reduced-motion: no-preference)', () => {
    if (entered || window.scrollY > 100) return;
    entered = true;
    gsap.timeline({defaults:{ease:'power3.out'}})
      .addLabel('introduce',0)
      .from('[data-hero-line]',{y:18,opacity:0,duration:.6,stagger:{amount:.06,ease:'power2.out'},clearProps:'transform,opacity'},'introduce')
      .from('[data-hero-item]',{opacity:0,duration:.45,clearProps:'opacity'},'introduce+=.08')
      .from('[data-hero-art]',{y:14,opacity:0,duration:.65,clearProps:'transform,opacity'},'introduce+=.08')
      .from('.name-underline',{scaleX:0,transformOrigin:'left center',duration:.45,clearProps:'transform'},'introduce+=.25');
  });
  const cleanup = () => media.revert();
  window.addEventListener('pagehide',cleanup,{once:true});
  if (import.meta.hot) import.meta.hot.dispose(cleanup);
}
