'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Scene01, Scene02, Scene03, SceneSkeleton01, SceneSkeleton02 } from '@/assets';
import { ChevronsDown } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import { animate, fadeInOut, hide } from '@/lib/variants';
import { useIsLarge } from '@/hooks/useMediaQuery';
import useSceneAnimation from '@/hooks/useSceneAnimation';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Scene() {
  const { t } = useTranslation();
  const scene01Refs = useSceneAnimation();
  const scene02Refs = useSceneAnimation();
  const scene03Refs = useSceneAnimation();

  return (
    <section id='scene'>
      <div className='mx-auto w-full max-w-8xl min-h-screen py-20 relative'>
        {/* Scene 01 */}
        <div
          className='md:max-h-[1250px] max-h-[650px] grid grid-rows-12 grid-cols-12 px-5 md:px-10 text-gray-900'
          ref={(el) => (scene01Refs.current.trigger = el)}
        >
          {/* <span
            className='row-start-1 row-span-5 col-start-8 col-span-5 font-bodoniModa text-[320px] font-normal text-right'
            ref={(el) => (scene01Refs.current.bignum = el)}
          >
            001
          </span> */}
          <h2
            className='md:row-start-5 row-start-3 row-span-2 col-start-7 col-span-5 font-bodoniMT text-[22px] md:text-[56px] font-bold text-left leading-[1.2] tracking-wide z-10'
            ref={(el) => (scene01Refs.current.title = el)}
            dangerouslySetInnerHTML={{ __html: t('concentrateTitle') }}
          />
          <div
            className='row-start-6 row-span-5 col-start-1 col-span-7 opacity-80'
            ref={(el) => (scene01Refs.current.pic = el)}
          >
            <Image
              src={Scene01}
              alt='Scene 01'
              width={793}
              height={487}
              // layout='responsive'
              className='object-cover'
            />
          </div>
          <p
            className='row-start-9 row-span-1 col-start-9 md:col-start-8 col-span-4 max-w-[317px] font-normal text-sm leading-tight justify-self-center self-end mb-6'
            ref={(el) => (scene01Refs.current.desc = el)}
          >
            {t('sence-p1')}
          </p>
          <div
            className='md:row-start-9 row-start-5 row-span-3 col-start-7 col-span-5 max-w-[600px] max-h-[300px] bg-shape -z-10'
            ref={(el) => (scene01Refs.current.shape = el)}
          />
        </div>

        {/* Scene 02 */}
        <div
          className='md:max-h-[1250px] max-h-[650px] grid grid-rows-12 grid-cols-12 px-5 md:px-10 text-gray-900 mt-20'
          ref={(el) => (scene02Refs.current.trigger = el)}
        >
          {/* <span
            className='row-start-1 row-span-6 col-start-2 col-span-5 font-bodoniModa text-[320px] font-normal text-right self-center z-10'
            ref={(el) => (scene02Refs.current.bignum = el)}
          >
            002
          </span> */}
          <h2
            className='md:row-start-6 row-start-2 row-span-2 col-start-2 col-span-6 font-bodoniMT text-[22px] md:text-[56px] font-bold text-left leading-[1.2] tracking-wide self-center ml-2 z-10'
            ref={(el) => (scene02Refs.current.title = el)}
            dangerouslySetInnerHTML={{ __html: t('quietTitle') }}
          />
          <div
            className='md:row-start-4 row-start-2 row-span-7 col-start-6 col-span-6 place-self-end opacity-80'
            ref={(el) => (scene02Refs.current.pic = el)}
          >
            <Image
              src={Scene02}
              alt='Scene 02'
              width={624}
              height={624}
              className='object-cover'
            />
          </div>
          <p
            className='md:row-start-8 row-start-4 row-span-1 col-start-1 md:col-start-3 md:col-span-3 col-span-4 max-w-[317px] font-normal text-sm leading-tight justify-self-center self-start mt-6'
            ref={(el) => (scene02Refs.current.desc = el)}
          >
            {t('sence-p2')}
          </p>
          <div
            className='md:row-start-9 row-start-4 row-span-4 col-start-4 col-span-4 max-w-[390px] aspect-square bg-shape justify-self-end -z-10'
            ref={(el) => (scene02Refs.current.shape = el)}
          />
        </div>

        {/* Scene 03 */}
        <div
          className='md:max-h-[1250px] max-h-[650px] grid grid-rows-12 grid-cols-12 px-5 md:px-10 text-gray-900 mt-20'
          ref={(el) => (scene03Refs.current.trigger = el)}
        >
          {/* <span
            className='row-start-1 row-span-6 col-start-2 col-span-5 font-bodoniModa text-[320px] font-normal text-right self-center z-10'
            ref={(el) => (scene03Refs.current.bignum = el)}
          >
            003
          </span> */}
          <h2
            className='md:row-start-5 row-start-2 row-span-1 col-start-5 col-span-7 font-bodoniMT text-[22px] md:text-[56px] font-bold text-left leading-[1.2] tracking-wide'
            ref={(el) => (scene03Refs.current.title = el)}
            dangerouslySetInnerHTML={{ __html: t('privacyTitle') }}
          />
          <div
            className='md:row-start-7 row-start-6 row-span-5 col-start-1 col-span-8 w-fit h-fit justify-self-center opacity-80 relative before:absolute before:w-full before:h-full before:top-16 before:left-16 before:bg-shape before:-z-10'
            ref={(el) => (scene03Refs.current.pic = el)}
          >
            <Image
              src={Scene03}
              alt='Scene 03'
              width={732}
              height={408}
              className='object-cover'
            />
          </div>
          <p
            className='md:row-start-7 row-start-3 md:row-span-1 row-span-1 md:col-start-9 col-start-2 md:col-span-3 col-span-10 max-w-[317px] font-normal text-sm leading-tight mt-2 md:mt-0'
            ref={(el) => (scene03Refs.current.desc = el)}
          >
            {t('sence-p3')}
          </p>
          {/* <div className='row-start-9 row-span-4 col-start-4 col-span-4 max-w-[390px] aspect-square bg-gray-300 justify-self-end -z-10' /> */}
        </div>

        <ChevronsDown
          className='absolute -bottom-[18px] left-1/2 -translate-x-1/2'
          size={36}
        />
      </div>
    </section>
  );
}
