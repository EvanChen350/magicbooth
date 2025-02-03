'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {
  Activity,
  Airplay,
  AlertCircle,
  BarChart,
  Codesandbox,
  Frown,
} from 'lucide-react';

import { useTranslation } from '@/app/i18n/client';
import { cn } from '@/lib/utils';
import { animate, fadeInOut, hide } from '@/lib/variants';
import ArticleItem from '../article-item';

type SolutionContentProps = {
  lng: string;
  className?: string;
};

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SolutionContent = ({ lng, className }: SolutionContentProps) => {
  const { t } = useTranslation(lng);
  const triggerRef = useRef<HTMLElement | any>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('.gs_reveal').forEach((elem) => {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
          trigger: elem,
          start: 'top bottom', // default value if not set
          end: 'bottom top', // default value if not set
          scrub: 0.5,
          markers: false,
          onEnter: () => animate(elem, fadeInOut), // Function called when entering the viewport
          onEnterBack: () => animate(elem, fadeInOut, -1), // Function called when scrolling back into view
          onLeave: () => hide(elem), // Function called when leaving the viewport
        });
      });
    },
    { scope: triggerRef },
  );

  return (
    <div className={cn('solution-trigger', className)} ref={triggerRef}>
      <ArticleItem
        Icon={Airplay}
        title={t('solution-one-title')}
        desc={t('solution-one-desc')}
        className={`border-b-[.25px] md:border-r-[.25px] gs_reveal gs_reveal_fromLeft`}
      />
      <ArticleItem
        Icon={Activity}
        title={t('solution-two-title')}
        desc={t('solution-two-desc')}
        className={`border-t-[.25px] md:border-t-0 border-b-[.25px] md:border-l-[.25px] gs_reveal gs_reveal_fromRight`}
      />
      <ArticleItem
        Icon={BarChart}
        title={t('solution-three-title')}
        desc={t('solution-three-desc')}
        className={`border-y-[.25px] md:border-r-[.25px] gs_reveal gs_reveal_fromLeft`}
      />
      <ArticleItem
        Icon={Frown}
        title={t('solution-four-title')}
        desc={t('solution-four-desc')}
        className={`border-y-[.25px] md:border-l-[.25px] gs_reveal gs_reveal_fromRight`}
      />
      <ArticleItem
        Icon={Codesandbox}
        title={t('solution-five-title')}
        desc={t('solution-five-desc')}
        className={`border-b-[.25px] md:border-b-0 border-t-[.25px] md:border-r-[.25px] gs_reveal gs_reveal_fromLeft`}
      />
      <ArticleItem
        Icon={AlertCircle}
        title={t('solution-six-title')}
        desc={t('solution-six-desc')}
        className={`border-t-[.25px] md:border-l-[.25px] gs_reveal gs_reveal_fromRight`}
      />
    </div>
  );
};

export default SolutionContent;
