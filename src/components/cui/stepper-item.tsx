'use client';

import React from 'react';

import { useIsLarge } from '@/hooks/useMediaQuery';
import { Progress } from '@/components/ui/progress';

type StepperItemProps = {
  stepNum: number;
  title: string;
  children: React.ReactNode;
  lineRef?: React.LegacyRef<HTMLProgressElement> | null;
};

const StepperItem = ({ stepNum, title, children, lineRef }: StepperItemProps) => {
  const isLarge = useIsLarge();

  return (
    <li className='shrink basis-0 flex-1 pb-20 lg:pb-0 group relative'>
      {isLarge ? (
        /* ...Steps Indicator: Desktop... */
        <div className='w-full hidden lg:inline-flex items-center align-middle mt-6'>
          <span className='w-12 h-12 flex justify-center items-center flex-shrink-0 border border-gray-300 rounded-full text-[22px] font-light text-gray-900'>
            {stepNum}
          </span>
          <progress
            ref={lineRef}
            max='100'
            value='0'
            aria-label='hidden'
            className='ms-2 w-full h-px flex-1 [&::-webkit-progress-bar]:bg-transparent [&::-webkit-progress-value]:bg-gray-200 [&::-moz-progress-bar]:bg-gray-200 group-last:hidden'
          />
        </div>
      ) : (
        /* ...Steps Indicator: Mobile & Tablet... */
        <div className='h-full lg:hidden flex flex-col items-center absolute top-12 -left-1/2'>
          <span className='w-12 h-12 flex justify-center items-center flex-shrink-0 border border-gray-300 rounded-full text-[22px] font-light text-gray-900'>
            {stepNum}
          </span>
          <progress
            ref={lineRef}
            max='100'
            value='0'
            aria-label='hidden'
            className='my-2 w-px h-full flex-1 [&::-webkit-progress-bar]:bg-transparent [&::-webkit-progress-value]:bg-gray-200 [&::-moz-progress-bar]:bg-gray-200 group-last:hidden'
          />
        </div>
      )}

      <div className='max-w-[208px] flex flex-col gap-5 lg:gap-3 mt-5 lg:mt-4 pr-8 md:pr-16 lg:pr-10 mx-auto text-center'>
        <h3 className='font-bodoniModa text-[28px] font-normal text-gray-900 leading-none tracking-tight'>
          {title}
        </h3>
        <p className='text-[14px] font-light text-gray-900 leading-[1.2] tracking-wide'>
          {children}
        </p>
      </div>
    </li>
  );
};

export default StepperItem;
