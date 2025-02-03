'use client';
import { Boxes, ChevronsDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SolutionContent } from '@/components/cui';

export default function Solution({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  return (
    <section id='solution'>
      <div className='mx-auto max-w-8xl flex items-center px-5 md:px-10'>
        <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-12 gap-x-4 md:gap-x-10 py-10 relative'>
          <div className='col-span-full lg:col-start-2 lg:col-span-10 lg:p-10 lg:relative'>
            <div
              className='hidden lg:block absolute w-16 h-16  top-0 left-0 rounded-tl-3xl border-t-2 border-l-2 border-gray-900'
              aria-hidden='true'
            />
            <div
              className='hidden lg:block absolute w-16 h-16  top-0 right-0 rounded-tr-3xl border-t-2 border-r-2 border-gray-900'
              aria-hidden='true'
            />
            <div
              className='hidden lg:block absolute w-16 h-16  bottom-0 right-0 rounded-br-3xl border-b-2 border-r-2 border-gray-900'
              aria-hidden='true'
            />
            <div
              className='hidden lg:block absolute w-16 h-16  bottom-0 left-0 rounded-bl-3xl border-b-2 border-l-2 border-gray-900'
              aria-hidden='true'
            />
            <div className='flex flex-col items-center gap-4'>
              <h1 className='font-bodoniMT text-2xl md:text-[40px] font-bold text-center leading-[1.2] tracking-[.02em]'>
              {t('solutionTitle')}
              </h1>
              <Boxes className='text-gray-900' />
              {/* <Boxes size={9.6} className='md:hidden' /> */}
              {/* <Boxes size={16} className='hidden md:block' /> */}
            </div>

            <SolutionContent
              lng={lng}
              className='grid overflow-hidden sm:grid-cols-2 lg:grid-cols-2 mt-6 md:mt-10'
            />
          </div>
          <ChevronsDown
            className='absolute -bottom-[18px] left-1/2 -translate-x-1/2'
            size={36}
          />
        </div>
      </div>
    </section>
  );
}
