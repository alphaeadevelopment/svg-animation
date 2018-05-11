import { TweenLite, TimelineMax, Sine } from 'gsap';

export default ({
  start: (target) => {
    const tl = new TimelineMax({ repeat: -1 });
    tl.add(TweenLite.to(target, 1, { transform: 'translateX(50px)', ease: Sine.easeInOut }));
    tl.add(TweenLite.to(target, 1, { transform: 'translateX(0px)', ease: Sine.easeInOut }));
    tl.play();
  },
});
