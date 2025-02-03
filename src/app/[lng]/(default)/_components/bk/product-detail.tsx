import Image from 'next/image';
import {
  BoothImg,
  Indicator,
  PlanetImg,
  PlanetOverlayImg,
  PlanetTagImg01,
  PlanetTagImg02,
  PlanetTagImg03,
  PlanetTagImg04,
  Spec,
} from '@/assets';
import { Boxes } from 'lucide-react';
import { Skeleton } from '@/components/cui';
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function ProductDetail() {
  return (
    <section className='relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='py-12 md:py-20'>
          {/* Section header */}
          <div className='mx-auto max-w-lg pb-16 text-center md:pb-20 flex flex-col items-center'>
            <p className='text-base font-normal text-gray-900 leading-[1.2]'>
              we are ready to provide any tailored solutions
            </p>
            <h1 className='text-3xl font-bold text-gray-200 md:text-4xl'>
              Introduction to Magic Booth
            </h1>
            <Boxes className='text-gray-200 mt-2' />
            <p className='text-sm text-gray-200 md:text-base mt-8'>
              Est incididunt officia irure Lorem elit eiusmod ullamco officia. Cillum sint
              nulla occaecat elit anim sint magna aliquip elit excepteur laboris. Laboris
              consectetur esse culpa ullamco culpa. Est incididunt officia irure Lorem
              elit eiusmod ullamco officia. Cillum sint nulla occaecat elit anim sint
              magna aliquip elit excepteur laboris. Laboris consectetur esse culpa ullamco
              culpa.
            </p>
            <div className='w-full justify-center  flex flex-col md:flex-row gap-8 mt-12'>
              <TooltipProvider>
                <div className='relative'>
                  <Tooltip>
                    <TooltipTrigger className={'absolute left-5 top-5 z-40'}>
                      <Image
                        src={Indicator}
                        width={25}
                        height={25}
                        alt='Product Indicator'
                      />
                    </TooltipTrigger>
                    <TooltipContent
                      side='left'
                      align='start'
                      className='bg-transparent border-none'
                    >
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
                <div className='relative'>
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
            </div>
          </div>

          {/* Grid */}
          <div className='grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10'>
            <article>
              <h3 className='mb-2 flex items-center space-x-2 font-medium text-gray-200'>
                <svg
                  className='fill-blue-500'
                  xmlns='http://www.w3.org/2000/svg'
                  width={16}
                  height={16}
                >
                  <path d='M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z' />
                </svg>
                <span>Instant Analytics</span>
              </h3>
              <p className='text-[15px] text-gray-400'>
                Collect essential insights about how visitors are using your site with
                in-depth page view metrics like pages, referring sites, and more.
              </p>
            </article>
            <article>
              <h3 className='mb-2 flex items-center space-x-2 font-medium text-gray-200'>
                <svg
                  className='fill-blue-500'
                  xmlns='http://www.w3.org/2000/svg'
                  width={16}
                  height={16}
                >
                  <path d='M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z' />
                </svg>
                <span>Metadata</span>
              </h3>
              <p className='text-[15px] text-gray-400'>
                Collect essential insights about how visitors are using your site with
                in-depth page view metrics like pages, referring sites, and more.
              </p>
            </article>
          </div>
          <div className='w-full h-80 mt-12 p-8 bg-gray-300 rounded-xl'>
            <figure className='relative max-w-3xl h-full mx-auto'>
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
    </section>
  );
}
