'use client';
import { ContactForm } from '@/components/cui';
import { Boxes, ChevronsDown } from 'lucide-react';
import { useTranslation } from '@/app/i18n/client';
export default function Contact({ lng }: { lng: string }) {
  const {t}=useTranslation(lng);
  return (
    <section id='contact'>
      <div className='mx-auto max-w-8xl px-5 md:px-10'>
        <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-12 gap-x-4 md:gap-x-10 py-16 relative'>
          <div className='col-span-full flex flex-col items-center gap-y-2'>
            <h2 className='font-solway text-2xl md:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-wide'>
              {t('contact-title')}
            </h2>
            <Boxes className='text-gray-900' />
          </div>

          <ContactForm
            lng={lng}
            className={
              'col-span-full lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 grid grid-cols-12 mt-10 px-8 md:px-10 lg:px-[72px] pt-8 md:pt-10 lg:pt-12 pb-20 border-2 border-gray-900 rounded-[48px] md:rounded-[64px]'
            }
          />

          <ChevronsDown
            className='absolute -bottom-[18px] left-1/2 -translate-x-1/2'
            size={36}
          />
        </div>
      </div>
    </section>
  );
}
