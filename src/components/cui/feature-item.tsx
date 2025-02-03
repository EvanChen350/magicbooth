import { LucideIcon } from "lucide-react";

type FeatureItemProps = {
  Icon: LucideIcon;
  title: string;
  desc: string;
};

const FeatureItem = ({ Icon, title, desc }: FeatureItemProps) => {
  return (
    <div className={`max-w-[308px] flex flex-col items-center gap-4`}>
      <Icon size={96} strokeWidth={1} className='text-gray-900' />
      <h3 className='font-solway text-2xl font-light text-center leading-snug text-gray-900'>
        {title}
      </h3>
      <p className='text-sm font-normal text-gray-400 text-center leading-[1.1]'>{desc}</p>
    </div>
  );
};

export default FeatureItem;
