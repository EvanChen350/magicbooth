import { gsap } from 'gsap';

export const animate = (elem: HTMLElement, animation: (elem: HTMLElement, x: number, y: number) => void, direction: number = 1) => {
  let x: number = 0,
    y: number = direction * 100;

  if (elem.classList.contains('gs_reveal_fromLeft')) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains('gs_reveal_fromRight')) {
    x = 100;
    y = 0;
  }
  elem.style.transform = `translate(${x}px, ${y}px)`;
  elem.style.opacity = '0';

  animation(elem, x, y);
};

export const fadeInOut = (elem: HTMLElement, x: number, y: number) => {
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
    },
  );
}

export const animatePlural = (elems: HTMLElement[], animation: (elem: HTMLElement, x: number, y: number) => void, direction: number = 1) => {
  elems.forEach(elem => {
    let x: number = 0,
      y: number = direction * 100;

    if (elem.classList.contains('gs_reveal_fromLeft')) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains('gs_reveal_fromRight')) {
      x = 100;
      y = 0;
    }
    elem.style.transform = `translate(${x}px, ${y}px)`;
    elem.style.opacity = '0';

    animation(elem, x, y);
  });
};

// export const fadeInOutPlural = (elem: HTMLElement, direction: number = 1) => {
//   gsap.fromTo(
//     elem,
//     { x: 0, y: 100 * direction, autoAlpha: 0 },
//     {
//       x: 0,
//       y: 0,
//       autoAlpha: 1,
//       duration: 0.5,
//       stagger: 0.2,
//       ease: 'expo',
//       overwrite: 'auto',
//     },
//   );
// }

export const fadeInOutPlural = (elem: HTMLElement[], direction: number = 1) => {
  gsap.fromTo(
    elem,
    { x: 0, y: 100 * direction, autoAlpha: 0 },
    {
      x: 0,
      y: 0,
      autoAlpha: 1,
      duration: 0.5,
      stagger: 0.2 * direction,
      ease: 'expo',
      overwrite: 'auto',
    },
  );
}

export const hide = (elem: HTMLElement) => {
  gsap.set(elem, { autoAlpha: 0 });
};
