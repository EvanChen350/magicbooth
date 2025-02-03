import Image from 'next/image';
import { SceneSkeleton01, SceneSkeleton02 } from '@/assets';
import { ChevronsDown } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import { animate, fadeInOut, hide } from '@/lib/variants';
import { useIsLarge } from '@/hooks/useMediaQuery';
import { useTranslation } from '@/app/i18n/client';
import { Trans } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Scene({ t }: any) {
  const scopeRef = useRef<HTMLElement | any>(null);
  const minLarge = useIsLarge();

  useGSAP(
    () => {
      if (minLarge) {
        gsap
          .timeline({
            x: () => -(scopeRef.current.scrollWidth - window.innerWidth),
            scrollTrigger: {
              trigger: scopeRef.current,
              horizontal: true,
              start: 'top top',
              end: () => `+=${scopeRef.current.scrollWidth}`,
              // start: 'top top',
              // end: '+=2000',
              scrub: 0.6,
              pin: true,
              markers: false,
              anticipatePin: 1, // Improves pinning behavior
              onUpdate: (self) => {
                // Debugging scroll position
                console.log('Section 2 ScrollTrigger Progress:', self.progress);
              },
            },
          })
          .fromTo(
            '#scene-desc > *',
            {
              x: 100,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              stagger: 2,
            },
          )
          .fromTo(
            '#scene-pic1',
            {
              y: 100,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
            },
            '-=6',
          )
          .fromTo(
            '#scene-pic2',
            {
              y: 100,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
            },
            '-=4',
          )
          .fromTo(
            '#scene-pic3',
            {
              y: 100,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
            },
            '-=2',
          )
          .fromTo(
            '#scene-pic4',
            {
              y: 100,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
            },
          )
          .fromTo(
            '#scene-help',
            {
              x: 100,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 1,
            },
          );
      } else {
        gsap.utils.toArray<HTMLElement>('.gs_reveal').forEach((elem) => {
          hide(elem); // assure that the element is hidden when scrolled into view

          ScrollTrigger.create({
            trigger: elem,
            markers: false, // Optionally show markers for debugging
            onEnter: () => animate(elem, fadeInOut), // Function called when entering the viewport
            onEnterBack: () => animate(elem, fadeInOut, -1), // Function called when scrolling back into view
            onLeave: () => hide(elem), // Function called when leaving the viewport
          });
        });
      }
    },
    { dependencies: [minLarge], revertOnUpdate: true, scope: scopeRef },
  );

  return (
    <section id='scene' className='relative' ref={scopeRef}>
      <div className='mx-auto max-w-8xl px-5 md:px-10'>
        {/* ...Desktop... */}
        <div className='hidden lg:grid lg:grid-cols-12 gap-x-4 lg:gap-x-10 grid-rows-8 h-[1250px] py-10 relative'>
          <div id='scene-pic1' className={'col-span-5 row-span-3'}>
            <Image src={SceneSkeleton01} alt={'Scene Skeleton 01'} />
          </div>
          <div className={'col-span-6 row-span-5 self-center relative'}>
            <div
              id={'scene-desc'}
              className='font-solway text-[40px] font-bold leading-[1.2] tracking-[.02em] text-right absolute -top-6 -right-10 z-50'
            >
              <p dangerouslySetInnerHTML={{ __html: t('sence-concentrate') }} />
              <p className=''>
                Want a <span className='underline'>QUIET place?</span>
              </p>
              <p className=''>
                Maybe some <span className='underline'>PRIVACY?</span>
              </p>
            </div>
            <div id='scene-pic2'>
              <Image src={SceneSkeleton02} alt={'Scene Skeleton 02'} />
            </div>
          </div>
          <div
            id='scene-pic3'
            className={'col-span-5 row-start-4 row-span-4 flex justify-center '}
          >
            <Image src={SceneSkeleton02} alt={'Scene Skeleton 03'} className='h-fit' />
          </div>
          <div
            className={
              'col-span-6 row-span-3 -ml-[78px] -mt-16 flex flex-col justify-between'
            }
          >
            <div id='scene-pic4'>
              <Image src={SceneSkeleton01} alt={'Scene Skeleton 04'} />
            </div>
            <p
              id='scene-help'
              className='font-calibri text-xl italic leading-[1.2] text-right -mr-10'
            >
              ...maybe we’re the solution to end your pain
            </p>
          </div>

          <ChevronsDown
            className='absolute -bottom-[18px] left-1/2 -translate-x-1/2'
            size={36}
          />
        </div>

        {/* ...Mobile & Tablet... */}
        <div className='lg:hidden grid grid-cols-4 md:grid-cols-5 gap-x-4 md:gap-x-10 py-10 relative'>
          <div
            id='scene1'
            className={'col-span-full md:col-span-4 flex flex-col relative'}
          >
            <Image
              src={SceneSkeleton01}
              alt={'Scene Skeleton 01'}
              className='w-full max-w-[516px] gs_reveal'
            />
            <p
              className='font-solway text-4xl font-bold leading-[1.2] text-right absolute -bottom-12 right-0 gs_reveal gs_reveal_fromRight'
              dangerouslySetInnerHTML={{ __html: t('sence-two-concentrate') }}
            />
          </div>
          <div
            id='scene2'
            className={
              'col-span-full md:justify-self-end flex justify-center md:justify-end mt-32 relative'
            }
          >
            <Image
              src={SceneSkeleton02}
              alt={'Scene Skeleton 02'}
              className='w-full max-w-[226px] md:max-w-none gs_reveal'
            />
            <p className='font-solway text-4xl font-bold leading-[1.2] text-left absolute -bottom-12 left-0 md:-left-12  gs_reveal gs_reveal_fromLeft'>
              Want a<br />
              <span className='underline'>QUIET place?</span>
            </p>
          </div>
          <div className='col-span-full md:justify-center mt-32 relative'>
            <Image
              src={SceneSkeleton01}
              alt={'Scene Skeleton 03'}
              className='w-full max-w-[516px] gs_reveal'
            />
            <p className='w-full font-solway text-4xl font-bold leading-[1.2]  text-center absolute -bottom-12 left-1/2 -translate-x-1/2 gs_reveal'>
              Maybe some
              <br />
              <span className='underline'>PRIVACY?</span>
            </p>
          </div>

          <p className='col-span-full font-calibri text-sm italic leading-[1.2] text-right mt-24 gs_reveal gs_reveal_fromRight'>
            ...maybe we’re the solution to end your pain
          </p>

          <ChevronsDown
            className='absolute -bottom-[18px] left-1/2 -translate-x-1/2'
            size={36}
          />
        </div>
      </div>
    </section>
  );
}
