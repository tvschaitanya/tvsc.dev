import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Finite illustration stories. Text and links in each section remain stationary. */
export function initArtworkMotion() {
  const media = gsap.matchMedia();
  const played = new WeakSet<HTMLElement>();
  media.add('(prefers-reduced-motion: no-preference)', () => {
    document.querySelectorAll<HTMLElement>('[data-section-artwork]').forEach(root => {
      if (played.has(root)) return;
      const select = (selector: string) => root.querySelectorAll<SVGElement>(selector);
      const timeline = gsap.timeline({
        defaults:{duration:.5,ease:'power3.out'},
        scrollTrigger:{trigger:root,start:'top 85%',once:true,onEnter:() => played.add(root)},
      });
      // Animate the meaningful pieces, never both the entire artwork and its children.
      if (root.classList.contains('artwork--writing')) {
        timeline.addLabel('write',0)
          .from(select('.writing-line'),{
            scaleX:.05,opacity:0,transformOrigin:'left center',
            stagger:{each:.12,ease:'power1.out'},duration:.45,
          },'write')
          .from(select('.pencil'),{x:6,y:-8,opacity:0,duration:.5},'write')
          .to(select('.pencil'),{x:3,y:-2,duration:.22,ease:'sine.inOut'},.5)
          .to(select('.pencil'),{x:0,y:0,duration:.3,ease:'power2.out'},.72);
      } else {
        timeline.addLabel('hello',0)
          .from(select('.hello-bubble'),{y:14,opacity:0,duration:.55},'hello')
          .from(select('.reply-bubble'),{y:8,opacity:0,duration:.4},'hello+=.18')
          .to(select('.reply-dot'),{y:-4,duration:.16,stagger:.065,ease:'sine.out'},.45)
          .to(select('.reply-dot'),{y:0,duration:.2,stagger:.065,ease:'sine.inOut'},.65);
      }
      // Shadows, paper, envelope and orbit stay fixed so the story has a stable base.
    });
  });
  const cleanup = () => media.revert();
  window.addEventListener('pagehide',cleanup,{once:true});
  if (import.meta.hot) import.meta.hot.dispose(cleanup);
}
