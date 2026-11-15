import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

/** Three short signal passes, then a still blueprint. No perpetual motion. */
export function initSystemsVisual() {
  const media = gsap.matchMedia();
  const played = new WeakSet<HTMLElement>();
  media.add('(prefers-reduced-motion: no-preference)', context => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || document.hidden) return;
        const root = entry.target as HTMLElement;
        if (played.has(root)) return;
        played.add(root);
        observer.unobserve(root);
        // add() keeps animations created by the observer inside matchMedia's cleanup context.
        context.add(() => {
          const timeline = gsap.timeline({delay:.55,repeat:2,repeatDelay:.12});
          for (const [name,start] of [['cloud',0],['data',.32],['ai',.32]] as const) {
            const dot = root.querySelector<SVGCircleElement>(`[data-signal="${name}"]`);
            const path = root.querySelector<SVGPathElement>(`[data-signal-path="${name}"]`);
            if (!dot || !path) continue;
            timeline.set(dot,{opacity:1},start)
              .to(dot,{duration:.65,ease:'none',motionPath:{path,align:path,alignOrigin:[.5,.5]}},start)
              .set(dot,{opacity:0},start + .65);
          }
        });
      });
    },{threshold:.4});
    document.querySelectorAll<HTMLElement>('[data-systems-visual]').forEach(root => observer.observe(root));
    return () => { observer.disconnect(); };
  });
  const cleanup = () => media.revert();
  window.addEventListener('pagehide',cleanup,{once:true});
  if (import.meta.hot) import.meta.hot.dispose(cleanup);
}
