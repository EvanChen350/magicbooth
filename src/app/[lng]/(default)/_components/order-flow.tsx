'use client';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { ChevronsDown } from 'lucide-react';
import Link from 'next/link';
import { Trans } from 'react-i18next';
import { StepperItem } from '@/components/cui';
import useProgressBarAnimation from '@/hooks/useProgressBarAnimation';

export default function OrderFlow() {
  const { triggerRef, refs } = useProgressBarAnimation(4);
  const { t } = useTranslation();
  return (
    <section id='order-flow'>
      <div className='mx-auto max-w-8xl min-h-screen relative grid items-center'>
        <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-12 self-end'>
          <div className='col-start-2 lg:col-start-5 col-span-full lg:col-span-8 md:ml-4 lg:ml-0 relative'>
            <h1
              className='font-bodoniMT text-4xl md:text-6xl lg:text-[50px] font-bold text-gray-900 leading-[1.2] tracking-tight md:tracking-normal lg:tracking-wide'
              dangerouslySetInnerHTML={{ __html: t('order-flow-title') }}
            />
            {/* <span
              className='absolute -top-5 -left-20 text-[10px] text-gray-900 text-right leading-[1.2] tracking-wide'
              dangerouslySetInnerHTML={{ __html: t('order-flow-span') }}
            /> */}
          </div>
        </div>

        <div className='grid grid-cols-1 self-start'>
          <ul className='col-span-full mt-16 flex flex-col lg:flex-row lg:gap-x-2 items-center lg:items-start ml-28 md:ml-4'>
            <StepperItem
              stepNum={1}
              title={t('order-flow-captionTitle1')}
              children={t('order-flow-captionChilren1')}
              lineRef={(el) => (refs.current[0] = el)}
            />
            <StepperItem
              stepNum={2}
              title={t('order-flow-captionTitle2')}
              children={t('order-flow-captionChilren2')}
              lineRef={(el) => (refs.current[1] = el)}
            />
            <StepperItem
              stepNum={3}
              title={t('order-flow-captionTitle3')}
              children={<Trans i18nKey='order-flow-captionChilren3'></Trans>}
              lineRef={(el) => (refs.current[2] = el)}
            />

            <StepperItem
              stepNum={4}
              title={t('order-flow-captionTitle4')}
              lineRef={(el) => (refs.current[3] = el)}
            >
              <Trans i18nKey='order-flow-captionChilren4-1'></Trans>
              <br />
              <br />
              <Link href={'#'} className='underline'>
                {t('order-flow-captionChilren4-2')}
              </Link>
            </StepperItem>
            {/* <StepperItem
              caption={
                <Trans i18nKey="order-flow-caption5"></Trans>
              }
              stepNum={5}
              title={t('order-flow-captionTitle5')}
              children={
                t('order-flow-captionChilren5')
              }
            /> */}
          </ul>
        </div>

        <ChevronsDown
          className='absolute -bottom-[18px] left-1/2 -translate-x-1/2'
          size={36}
        />
      </div>
    </section>
  );
}
