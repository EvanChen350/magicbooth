import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useSceneAnimation = () => {
  const refs = useRef<{
    trigger: HTMLElement | null;
    // bignum: HTMLElement | null;
    title: HTMLElement | null;
    pic: HTMLElement | null;
    desc: HTMLElement | null;
    shape: HTMLElement | null;
  }>({
    trigger: null,
    //bignum: null,
    title: null,
    pic: null,
    desc: null,
    shape: null,
  });

  useEffect(() => {
    const { trigger, title, pic, desc, shape } = refs.current;
    gsap.set([title, pic, desc, shape], { autoAlpha: 0 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'top bottom',
        end: '50% top',
        scrub: 0.5,
        markers: false,
        toggleActions: 'play pause resume reset', // onEnter, onLeave, onEnterBack, onLeaveBack
      },
    });

    timeline
      // .fromTo(
      //   bignum,
      //   { x: -200, autoAlpha: 0 },
      //   { duration: 2, x: 0, autoAlpha: 1, ease: 'expo' },
      // )
      .fromTo(
        title,
        { y: 100, autoAlpha: 0 },
        { duration: 1.25, y: 0, autoAlpha: 1, ease: 'expo' },
        '-=1.5',
      )
      .fromTo(
        pic,
        { y: -100, autoAlpha: 0 },
        { duration: 1.25, y: 0, autoAlpha: 1, ease: 'expo' },
        '-=1',
      )
      .fromTo(
        desc,
        { x: -100, autoAlpha: 0 },
        { duration: 1.25, x: 0, autoAlpha: 1, ease: 'expo' },
        '-=1.5',
      )
      .fromTo(
        shape,
        { x: 100, autoAlpha: 0 },
        { duration: 1.25, x: 0, autoAlpha: 1, ease: 'expo' },
        '-=1',
      );
  }, []);

  return refs;
};

export default useSceneAnimation;
