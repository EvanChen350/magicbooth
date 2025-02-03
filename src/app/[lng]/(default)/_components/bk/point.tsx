import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Point01, Point02, Point03, Point04 } from '@/assets';

export default function Point() {
  return (
    <section>
      <div className='w-full h-auto mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='py-12 md:py-20'>
          <div className='space-y-12 text-center'>
            <div className='relative inline-flex'>
              <svg
                className='absolute -left-6 -top-2 -z-10'
                width={40}
                height={49}
                viewBox='0 0 40 49'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z'
                  fill='#D1D5DB'
                />
              </svg>
              <h2 className='text-3xl font-bold text-gray-900 md:text-4xl min-w-[530px] border-b-2 border-orange-300 pb-4'>
                Features
              </h2>
            </div>
            <div className='flex flex-col md:flex-row gap-8'>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  className={''}
                  src={Point01}
                  width={140}
                  height={100}
                  alt={'Private Space'}
                />
                <p className='text-md font-semibold mt-4'>Private Space</p>
                <span className='text-sm text-gray-500 mt-2'>
                  A private booth provides isolation from external distractions, allowing
                  the user to focus intently on their work.
                </span>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  className={''}
                  src={Point02}
                  width={140}
                  height={100}
                  alt={'Private Space'}
                />
                <p className='text-md font-semibold mt-4'>Private Space</p>
                <span className='text-sm text-gray-500 mt-2'>
                  A private booth provides isolation from external distractions, allowing
                  the user to focus intently on their work.
                </span>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  className={''}
                  src={Point03}
                  width={140}
                  height={100}
                  alt={'Private Space'}
                />
                <p className='text-md font-semibold mt-4'>Private Space</p>
                <span className='text-sm text-gray-500 mt-2'>
                  A private booth provides isolation from external distractions, allowing
                  the user to focus intently on their work.
                </span>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  className={''}
                  src={Point04}
                  width={140}
                  height={100}
                  alt={'Private Space'}
                />
                <p className='text-md font-semibold mt-4'>Private Space</p>
                <span className='text-sm text-gray-500 mt-2'>
                  A private booth provides isolation from external distractions, allowing
                  the user to focus intently on their work.
                </span>
              </div>
            </div>
            {/* <div className='text-sm font-medium text-gray-500'>
              <span className='text-gray-700'>Mary Sullivan</span>{' '}
              <span className='text-gray-400'>/</span>{' '}
              <a className='text-blue-500' href='#0'>
                CTO at Microsoft
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
