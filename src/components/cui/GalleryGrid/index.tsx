'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

import {
  Gallery01,
  Gallery02,
  Gallery03,
  Gallery04,
  Gallery05,
  Gallery06,
} from '@/assets';
import { cn } from '@/lib/utils';

type GalleryGridProps = {
  className?: string;
};

gsap.registerPlugin(ScrollTrigger, useGSAP);

const GalleryGrid = ({ className }: GalleryGridProps) => {
  const triggerRef = useRef<HTMLElement | any>(null);

  useGSAP(
    () => {
      /**
       * ...scrub working version...
       */
      gsap.fromTo(
        triggerRef.current.querySelectorAll('img'),
        { x: 0, y: 100, autoAlpha: 0 },
        {
          x: 0,
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'expo',
          overwrite: 'auto',
          scrollTrigger: {
            markers: false,
            start: 'top bottom',
            end: '50% top',
            trigger: triggerRef.current,
            scrub: 0.5,
            toggleActions: 'play pause resume reset', // onEnter, onLeave, onEnterBack, onLeaveBack
          },
        },
      );

      /**
       * ...backup version...
       */
      //     const elem = triggerRef.current.querySelectorAll('img');

      //     if (elem) {
      //       hide(elem); // assure that the element is hidden when scrolled into view

      //       ScrollTrigger.create({
      //         trigger: triggerRef.current,
      //         start: 'top bottom', // default value if not set
      //         end: 'bottom top', // default value if not set
      //         scrub: 0.5,
      //         markers: true, // Optionally show markers for debugging
      //         onEnter: () => fadeInOutPlural(elem),
      //         onEnterBack: () => fadeInOutPlural(elem, -1),
      //         onLeave: () => hide(elem),
      //       });
      //     }
    },
    { scope: triggerRef },
  );

  return (
    <div className={cn('', className)} ref={triggerRef}>
      <Image src={Gallery01} alt='Gallery Pic No.01' />
      <Image src={Gallery02} alt='Gallery Pic No.02' />
      <Image src={Gallery03} alt='Gallery Pic No.03' />
      <Image src={Gallery04} alt='Gallery Pic No.04' />
      <Image src={Gallery05} alt='Gallery Pic No.05' />
      <Image src={Gallery06} alt='Gallery Pic No.06' />
      <Image src={Gallery01} alt='Gallery Pic No.01' />
      <Image src={Gallery02} alt='Gallery Pic No.02' />
      <Image src={Gallery03} alt='Gallery Pic No.03' />
      <Image src={Gallery04} alt='Gallery Pic No.04' />
      <Image src={Gallery05} alt='Gallery Pic No.05' />
      <Image src={Gallery06} alt='Gallery Pic No.06' />
      <Image src={Gallery01} alt='Gallery Pic No.01' />
      <Image src={Gallery02} alt='Gallery Pic No.02' />
      <Image src={Gallery03} alt='Gallery Pic No.03' />
      <Image src={Gallery04} alt='Gallery Pic No.04' />
      <Image src={Gallery05} alt='Gallery Pic No.05' />
      <Image src={Gallery06} alt='Gallery Pic No.06' />
      <Image src={Gallery01} alt='Gallery Pic No.01' />
      <Image src={Gallery02} alt='Gallery Pic No.02' />
      <Image src={Gallery03} alt='Gallery Pic No.03' />
      <Image src={Gallery04} alt='Gallery Pic No.04' />
      <Image src={Gallery05} alt='Gallery Pic No.05' />
      <Image src={Gallery06} alt='Gallery Pic No.06' />
    </div>
  );
};

export default GalleryGrid;
