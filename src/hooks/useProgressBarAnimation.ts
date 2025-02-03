/**
 * Custom hook for animating progress bars using GSAP and ScrollTrigger.
 *
 * @param numProgressBars - The number of progress bars to animate.
 * @param pin - Whether to pin the animation container or not. Defaults to true.
 * @returns An object containing the triggerRef and refs.
 */

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const useProgressBarAnimation = (numProgressBars: number) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const refs = useRef<(HTMLProgressElement | null)[]>(
    Array.from({ length: numProgressBars }, () => null),
  );

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        //* ...Define media queries...
        isDesktop: '(min-width: 1024px)',
        isTablet: '(min-width: 768px) and (max-width: 1023px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop } = context.conditions as { isDesktop: boolean };

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: `+=${triggerRef.current?.offsetHeight}`,
            scrub: 0.5,
            pin: isDesktop ? true : false, // Pin only on desktop
            markers: false, // Uncomment this line to show markers for debugging
          },
        });

        refs.current.forEach((ref) => {
          if (ref) {
            timeline.fromTo(
              ref,
              { value: 0 },
              {
                value: 100,

                //! ...This is the commented out code for the onUpdate method...
                // onUpdate: function () {
                //   if (ref) {
                //     const progressValue = this.targets()[0].value;
                //     ref.style.transform = `translateX(-${100 - progressValue}%)`;
                //   }
                // },
              },
            );
          }
        });

        return () => {
          // Cleanup function to kill the timeline and scrollTrigger
          timeline.kill();
        };
      },
    );

    return () => {
      mm.revert(); // Revert all matchMedia instances
    };
  }, []);

  return { triggerRef, refs };
};

export default useProgressBarAnimation;
