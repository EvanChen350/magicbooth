import { ArrowBigRightDash, LucideIcon } from 'lucide-react';

interface OrderStepProps {
  IsArrowShow?: boolean;
  StepIcon: LucideIcon
}

export default function OrderStep({ IsArrowShow = true, StepIcon }:OrderStepProps) {
  return (
      <div className='flex flex-col items-center gap-2'>
        <div className='relative w-fit p-6 lg:p-10 rounded-full border-2 border-orange-300'>
          <StepIcon className={'w-6 h-6 lg:w-10 lg:h-6'}  />
          {
            IsArrowShow && <ArrowBigRightDash size={36} className={'absolute -right-[5.5rem] -translate-x-full top-1/2 -translate-y-1/2'} />
          }
        </div>
        <p className='text-xs lg:text-sm'>STEP 1</p>
        <p className='text-[0.5rem] lg:text-xs'>Send mail to us for trial apply</p>
      </div>
  );
}
