'use client';

import Image from 'next/image';
import { Indicator, Parameter1, Parameter2, Parameter3, PlanetTagImg01, Product1, Product2, Product3, Spec } from '@/assets';
import { Activity, Airplay, Boxes, ChevronsDown } from 'lucide-react';
import { Skeleton, ArticleItem } from '@/components/cui';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useTranslation } from '@/app/i18n/client';
import { useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import { gsap } from 'gsap';
import { useIsMedium } from '@/hooks/useMediaQuery';

export default function ProductDetail({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const sectionRef = useRef<HTMLElement | any>(null);
  const triggerRef = useRef<HTMLElement | any>(null);
  // useGSAP(
  //   () => {
  //     let sections = gsap.utils.toArray<HTMLElement>('.scroll .panel');
  //     let container = document.querySelector<HTMLElement>('.panel_container');

  //     if (container) {
  //       gsap.to(sections, {
  //         xPercent: -100 * (sections.length - 1),
  //         ease: 'none',
  //         duration: 4,
  //         scrollTrigger: {
  //           trigger: '.scroll',
  //           pin: true,
  //           scrub: true,
  //           end: `+=${container.offsetWidth}`,
  //         },
  //       });
  //     }
  //   },
  //   //   gsap.fromTo(
  //   //     sectionRef.current,
  //   //     {
  //   //       x: 0,
  //   //     },
  //   //     {
  //   //       x: minMedium ? '-250%' : '-350%',
  //   //       ease: 'none',
  //   //       duration: 1,
  //   //       scrollTrigger: {
  //   //         trigger: triggerRef.current,
  //   //         start: 'top top',
  //   //         end: '+=2000',
  //   //         // end: '2000 top',
  //   //         scrub: 0.6,
  //   //         // pin: true,
  //   //         markers: true,
  //   //       },
  //   //     },
  //   //   );
  //   // },
  //   // { dependencies: [minMedium], revertOnUpdate: true, scope: triggerRef },
  // );

  return (
    <section id='product-detail'>
      <div
        className='mx-auto w-full min-h-screen grid items-center py-12 md:py-20 relative scroll'
        ref={triggerRef}
      >
        <div className='mx-auto max-w-lg md:max-w-2xl text-center pb-16 md:pb-10 px-5 md:px-10 flex flex-col self-end'>
          <p className='text-xs md:text-base font-normal text-gray-900 leading-[1.2]'>
            {t('product-detail-solutions')}
          </p>
          <h2 className='font-bodoniMT text-2xl md:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-wide'>
            {t('product-detail-title')}
          </h2>
          <Boxes className='mx-auto text-gray-900 mt-2' />
        </div>

        <div
          ref={sectionRef}
          className={`w-[100%]  items-center relative panel_container self-start mb-40 md:mb-60`}
        >
          <h3 className='text-center font-bodoniMT text-2xl md:text-[32px] mb-8'>
            MINI-MP1
          </h3>
          {/* ...1.1... */}
          <div className='w-full h-fit flex flex-col md:flex-row justify-center md:justify-center items-center gap-5 md:gap-8 panel'>
          <div className="w-full h-fit flex flex-col md:flex-row justify-center md:justify-center items-center gap-5 md:gap-8 panel">
  {/* 第一张图片容器 */}
  <div className="grow w-full max-w-[300px] relative mr-20">
    <Image
      src={Product1}
      width={300}
      height={300}
      alt="Product1"
      className="object-cover"
    />
  </div>
  
  {/* 第二张图片容器 */}
  <div className="grow w-full max-w-[300px] relative style={{ marginLeft: '20px' }} mt-10">
    <Image
      src={Parameter1}
      width={300}
      height={200}
      alt="Product Indicator"
      className="object-cover"
    />
  </div>
</div>
          </div>
          {/* ...1.2... */}
          {/* <div className=' w-screen h-fit flex items-center'>
            <TooltipProvider>
              <div className='grow w-full max-w-[193px] relative'>
                <Tooltip>
                  <TooltipTrigger className={'absolute right-5 bottom-5 z-40'}>
                    <Image
                      src={Indicator}
                      width={25}
                      height={25}
                      alt='Product Indicator'
                    />
                  </TooltipTrigger>
                  <TooltipContent side='right' className='bg-transparent border-none'>
                    <Image
                      className='opacity-80 transition-opacity duration-500'
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt='Tag 01'
                    />
                  </TooltipContent>
                </Tooltip>
                <Skeleton w={48} h={60} />
              </div>
            </TooltipProvider>
          </div> */}
          {/* ...2... */}
          <div className='w-full h-fit panel flex items-center justify-center'>
            <div className='max-w-3xl w-full grid sm:grid-cols-2 lg:grid-cols-2 py-12'>
              <ArticleItem
                Icon={Airplay}
                title={t('product-detail-productTitle1')}
                desc={{ __html: t('product-detail-productSize1') }}
                className={`border-b-[.25px] md:border-b-0 md:border-r-[.25px]`}
              />
              <ArticleItem
                Icon={Activity}
                title={t('product-detail-productTitle2')}
                desc={{ __html: t('product-detail-productMaterial1') }}
                className={`border-t-[.25px] md:border-t-0 md:border-l-[.25px]`}
              />
            </div>
          </div>
          {/* ...3... */}
          <div className='w-full h-80 panel'>
            <div className='mx-auto h-full max-w-4xl bg-gray-300 rounded-xl p-8'>
              <figure className='relative h-full'>
                <Image
                  className={'object-contain'}
                  src={Spec}
                  alt='Product Dimensions'
                  fill={true}
                />
              </figure>
              <span className='text-xs text-gray-600 italic'>* Product Dimensions</span>
            </div>
          </div>
        </div>

        <div
          ref={sectionRef}
          className={`w-[100%]  items-center relative panel_container self-start mb-40 md:mb-60`}
        >
          <h3 className='text-center font-bodoniMT text-2xl md:text-[32px] mb-8'>
            MINNI-MP2
          </h3>
          {/* ...1.1... */}
          <div className="w-full h-fit flex flex-col md:flex-row justify-center md:justify-center items-center gap-5 md:gap-8 panel">
  {/* 第2.一张图片容器 */}
        <div className="grow w-full max-w-[300px] relative mr-20">
          <Image
            src={Product2}
            width={300}
            height={300}
            alt="Product2"
            className="object-cover"
          />
        </div>
        
        {/* 第2.二张图片容器 */}
        <div className="grow w-full max-w-[300px] relative style={{ marginLeft: '20px' }} mt-20">
          <Image
            src={Parameter2}
            width={300}
            height={200}
            alt="Parameter2"
            className="object-cover"
          />
        </div>
      </div>
          {/* ...1.2... */}
          {/* <div className=' w-screen h-fit flex items-center'>
            <TooltipProvider>
              <div className='grow w-full max-w-[193px] relative'>
                <Tooltip>
                  <TooltipTrigger className={'absolute right-5 bottom-5 z-40'}>
                    <Image
                      src={Indicator}
                      width={25}
                      height={25}
                      alt='Product Indicator'
                    />
                  </TooltipTrigger>
                  <TooltipContent side='right' className='bg-transparent border-none'>
                    <Image
                      className='opacity-80 transition-opacity duration-500'
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt='Tag 01'
                    />
                  </TooltipContent>
                </Tooltip>
                <Skeleton w={48} h={60} />
              </div>
            </TooltipProvider>
          </div> */}

          {/* ...2... */}
          <div className='w-full h-fit panel flex items-center justify-center'>
            <div className='max-w-3xl w-full grid sm:grid-cols-2 lg:grid-cols-2 py-12'>
              <ArticleItem
                Icon={Airplay}
                title={t('product-detail-productTitle1')}
                desc={{ __html: t('product-detail-productSize2') }}
                className={`border-b-[.25px] md:border-b-0 md:border-r-[.25px]`}
              />
              <ArticleItem
                Icon={Activity}
                title={t('product-detail-productTitle2')}
                desc={{ __html: t('product-detail-productMaterial2') }}
                className={`border-t-[.25px] md:border-t-0 md:border-l-[.25px]`}
              />
            </div>
          </div>


          {/* ...3... */}
          <div className='w-full h-80 panel'>
            <div className='mx-auto h-full max-w-4xl bg-gray-300 rounded-xl p-8'>
              <figure className='relative h-full'>
                <Image
                  className={'object-contain'}
                  src={Spec}
                  alt='Product Dimensions'
                  fill={true}
                />
              </figure>
              <span className='text-xs text-gray-600 italic'>* Product Dimensions</span>
            </div>
          </div>
        </div>

        <div
          ref={sectionRef}
          className={`w-[100%]  items-center relative panel_container self-start`}
        >
          <h3 className='text-center font-bodoniMT text-2xl md:text-[32px] mb-8'>
            MINI-MP3
          </h3>
          {/* ...1.1... */}
           <div className="w-full h-fit flex flex-col md:flex-row justify-center md:justify-center items-center gap-5 md:gap-8 panel">
  {/* 第3.一张图片容器 */}
        <div className="grow w-full max-w-[300px] relative mr-20">
          <Image
            src={Product3}
            width={300}
            height={300}
            alt="Product3"
            className="object-cover"
          />
        </div>
        
        {/* 第3.二张图片容器 */}
        <div className="grow w-full max-w-[300px] relative style={{ marginLeft: '20px' }} mt-1">
          <Image
            src={Parameter3}
            width={300}
            height={200}
            alt="Parameter3"
            className="object-cover"
          />
        </div>
      </div>

          {/* ...1.2... */}
          {/* <div className=' w-screen h-fit flex items-center'>
            <TooltipProvider>
              <div className='grow w-full max-w-[193px] relative'>
                <Tooltip>
                  <TooltipTrigger className={'absolute right-5 bottom-5 z-40'}>
                    <Image
                      src={Indicator}
                      width={25}
                      height={25}
                      alt='Product Indicator'
                    />
                  </TooltipTrigger>
                  <TooltipContent side='right' className='bg-transparent border-none'>
                    <Image
                      className='opacity-80 transition-opacity duration-500'
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt='Tag 01'
                    />
                  </TooltipContent>
                </Tooltip>
                <Skeleton w={48} h={60} />
              </div>
            </TooltipProvider>
          </div> */}

          {/* ...2... */}
          <div className='w-full h-fit panel flex items-center justify-center'>
            <div className='max-w-3xl w-full grid sm:grid-cols-2 lg:grid-cols-2 py-12'>
              <ArticleItem
                Icon={Airplay}
                title={t('product-detail-productTitle1')}
                desc={{ __html: t('product-detail-productSize3') }}
                className={`border-b-[.25px] md:border-b-0 md:border-r-[.25px]`}
              />
              <ArticleItem
                Icon={Activity}
                title={t('product-detail-productTitle2')}
                desc={{ __html: t('product-detail-productMaterial3') }}
                className={`border-t-[.25px] md:border-t-0 md:border-l-[.25px]`}
              />
            </div>
          </div>

          {/* ...3... */}
          <div className='w-full h-80 panel'>
            <div className='mx-auto h-full max-w-4xl bg-gray-300 rounded-xl p-8'>
              <figure className='relative h-full'>
                <Image
                  className={'object-contain'}
                  src={Spec}
                  alt='Product Dimensions'
                  fill={true}
                />
              </figure>
              <span className='text-xs text-gray-600 italic'>* Product Dimensions</span>
            </div>
          </div>
        </div>

        <ChevronsDown
          className='absolute -bottom-[18px] left-1/2 -translate-x-1/2'
          size={36}
        />
      </div>
    </section>
  );
}
