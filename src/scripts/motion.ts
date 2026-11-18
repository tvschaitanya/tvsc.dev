import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Lead with the name; support arrives together, with no delayed interactive controls. */
export function initMotion() {
  const media = gsap.matchMedia();
  let entered = false;
  media.add('(prefers-reduced-motion: no-preference)', () => {
    if (entered || window.scrollY > 100) return;
    entered = true;
    gsap.timeline({defaults:{ease:'power3.out'}})
      .addLabel('introduce',0)
      .from('[data-hero-line]',{y:18,opacity:0,duration:.75,stagger:{amount:.06,ease:'power2.out'},clearProps:'transform,opacity'},'introduce')
      .from('[data-hero-item]',{opacity:0,duration:.55,clearProps:'opacity'},'introduce+=.08');
  });
  let notePlayed = false;
  media.add('(prefers-reduced-motion: no-preference)', () => {
    const arrow = document.querySelector('[data-about-note-arrow]');
    if (!arrow || notePlayed) return;
    gsap.from(arrow, {
      y: 8,
      opacity: 0,
      duration: .45,
      ease: 'power2.out',
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: arrow,
        start: 'top 85%',
        once: true,
        onEnter: () => { notePlayed = true; },
      },
    });
  });

  const cleanup = () => media.revert();
  window.addEventListener('pagehide',cleanup,{once:true});
  if (import.meta.hot) import.meta.hot.dispose(cleanup);
}
