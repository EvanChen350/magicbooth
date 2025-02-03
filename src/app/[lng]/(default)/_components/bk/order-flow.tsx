import Image from 'next/image';
import { TestimonialImg } from '@/assets';
import {
  ArrowBigRightDash,
  Boxes,
  MailPlus,
  MessagesSquare,
  Ruler,
  Truck,
  UserRoundCheck,
} from 'lucide-react';
import { OrderStep, Skeleton } from '@/components/cui';

export default function OrderFlow() {
  return (
    <section>
      <div className='py-12'>
        {/* <div className='bg-red-400'> */}
        <div className='mx-auto max-w-3xl lg:max-w-5xl px-4 sm:px-6 py-2 md:py-12 bg-gray-100 rounded-xl'>
          {/* Section header */}
          <div className='mx-auto max-w-lg pb-16 text-center md:pb-20 flex flex-col items-center'>
            <p className='text-xs font-extralight text-orange-300 md:text-sm'>
              we are ready to provide any tailored solutions
            </p>
            <h2 className='text-3xl font-bold text-gray-600 md:text-4xl'>
              Getting your booth is quick and simple
            </h2>
            <Boxes className='text-gray-600 mt-2' />
            <div className='flex flex-col md:flex-row items-center gap-16 mt-12'>
              <OrderStep StepIcon={MailPlus} />
              <OrderStep StepIcon={MessagesSquare} />
              <OrderStep StepIcon={Ruler} />
              <OrderStep StepIcon={UserRoundCheck} />
              <OrderStep IsArrowShow={false} StepIcon={Truck} />
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-3xl px-4 sm:px-6 py-2 md:py-12 flex flex-wrap gap-12 justify-center'>
        <Skeleton w={48} />
        <Skeleton w={48} />
        <Skeleton w={48} />
        <Skeleton w={48} />
        <Skeleton w={48} />
      </div>
    </section>
  );
}
