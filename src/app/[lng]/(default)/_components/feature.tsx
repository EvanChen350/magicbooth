import { FeatureItem } from '@/components/cui';
import { Activity, Calendar, Car, ChevronsDown, Package } from 'lucide-react';

export default function Feature({ t }: any) {
  return (
    <section id='feature'>
      <div className='mx-auto max-w-8xl px-5 md:px-10'>
        <div className='lg:h-[836px] grid grid-cols-4 md:grid-cols-5 lg:grid-cols-12 gap-x-4 lg:gap-x-10 gap-y-6 lg:gap-y-0 lg:grid-rows-12 py-10 relative'>
          <div className='col-span-full relative'>
            <div className='flex flex-col items-center pr-1'>
              <p className='font-calibri text-sm md:text-xl font-normal text-right text-gray-400'>
                {t('feature-p1')}
              </p>
              <h1 className='font-solway text-2xl md:text-[40px] font-bold text-center leading-[1.2] tracking-[.02em]'>
                {t('featureTitle')}
              </h1>
            </div>
          </div>

          <div className='col-span-full lg:col-start-4 lg:col-span-3 lg:row-start-3 lg:row-span-3 justify-self-center lg:justify-self-auto'>
            <FeatureItem
              Icon={Calendar}
              title={t('feature-title1')}
              desc={t('feature-desc1')}
            />
          </div>
          <div className='col-span-full lg:col-start-4 lg:col-span-3 lg:row-start-8 lg:row-span-3 justify-self-center lg:justify-self-auto'>
            <FeatureItem
              Icon={Activity}
              title={t('feature-title2')}
              desc={t('feature-desc2')}
            />
          </div>
          <div className='col-span-full lg:col-start-8 lg:col-span-3 lg:row-start-4 lg:row-span-3 justify-self-center lg:justify-self-auto'>
            <FeatureItem
              Icon={Package}
              title={t('feature-title3')}
              desc={t('feature-desc3')}
            />
          </div>
          <div className='col-span-full lg:col-start-8 lg:col-span-3 lg:row-start-9 lg:row-span-3 justify-self-center lg:justify-self-auto'>
            <FeatureItem
              Icon={Car}
              title={t('feature-title4')}
              desc={t('feature-desc4')}
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
