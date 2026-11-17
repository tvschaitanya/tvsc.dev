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
      .from('[data-hero-line]',{y:18,opacity:0,duration:.6,stagger:{amount:.06,ease:'power2.out'},clearProps:'transform,opacity'},'introduce')
      .from('[data-hero-item]',{opacity:0,duration:.45,clearProps:'opacity'},'introduce+=.08');
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
  let noteDismissed = false;
  media.add({ normal: '(prefers-reduced-motion: no-preference)', reduced: '(prefers-reduced-motion: reduce)' }, ({ conditions }) => {
    const note = document.querySelector('#about .portrait-note');
    if (!note) return;
    if (noteDismissed) {
      gsap.set(note, { autoAlpha: 0 });
      return;
    }
    gsap.to(note, {
      autoAlpha: 0,
      duration: conditions?.reduced ? 0 : .3,
      scrollTrigger: {
        trigger: note,
        start: 'top 45%',
        once: true,
        onEnter: () => { noteDismissed = true; },
      },
    });
  });
  const cleanup = () => media.revert();
  window.addEventListener('pagehide',cleanup,{once:true});
  if (import.meta.hot) import.meta.hot.dispose(cleanup);
}
