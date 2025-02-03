import dynamic from 'next/dynamic';
import { ChevronsDown } from 'lucide-react';
import Link from 'next/link';

import { useTranslation } from '@/app/i18n';
import { CarouselPlugin, LinkItem } from '@/components/cui';

const YoutubePlayer = dynamic(() => import('@/components/ui/YoutubePlayer'), {
  ssr: false,
});

export default async function Hero({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, 'hero');

  return (
    <section id='hero' className='relative'>
      <div className='mx-auto w-full md:max-w-8xl  px-5 md:px-10'>
        <div className='grid grid-cols-6 md:grid-cols-5 lg:grid-cols-12 gap-4 md:gap-x-10 py-10 relative'>
          <div className='w-[138px] md:w-[346px] md:ml-10 lg:ml-1 self-end lg:self-center flex flex-col md:gap-6 gap-3 justify-between z-50'>
            <h1 className='font-bodoniMT text-2xl text-[18px] md:text-[40px] font-bold leading-[1.2]'>
              {t('hero-title')}
            </h1>
          </div>

          <div
            className={
              'max-w-[776px] max-h-[722px] col-span-full col-start-2 lg:col-start-2 lg:col-span-8'
            }
          >
            <CarouselPlugin />
          </div>
          <div
            className='hidden lg:block absolute w-[2px] col-start-10 top-[40px] bg-gray-900'
            style={{ height: 'calc(100% - 40px)' }}
            aria-hidden='true'
          />

          <div className='h-full col-span-4 col-start-2  md:col-span-3 md:col-start-2  lg:col-span-3  lg:grid grid-rows-2 grid-cols-3 gap-x-10'>
            <div className='hidden lg:block col-span-3 gap-3 pl-10'>
              <p className='mb-6 font-bodoniModa font-bold text-2xl'>{t('hero-menu')}</p>

              <ul className='font-bodoniModa text-2xl leading-[1.2] space-y-4'>
                {(t('hero-menu-items', { returnObjects: true }) as Array<any>).map(
                  (item, index) => (
                    <li key={index}>
                      <Link href={`#${item.path}`}>{t(item.value)}</Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className='hidden lg:block col-span-3 mt-24 ml-10 '>
              <YoutubePlayer videoId='-4z7g7qaDbs' height={230} />
            </div>
            <div className='lg:hidden block mt-10'>
              <YoutubePlayer videoId='-4z7g7qaDbs' height={140} />
            </div>
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
