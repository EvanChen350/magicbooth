import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type ArticleItemProps = {
  Icon: LucideIcon;
  title: string;
  desc: string | { __html: string };
  className?: string;
};

const ArticleItem = ({ Icon, title, desc, className }: ArticleItemProps) => {
  return (
    <article className={cn('font-calibri px-4 py-5 lg:px-10 lg:py-10 border-gray-800', className)}>
      <h3 className="flex items-center space-x-2 text-base font-normal text-gray-900">
        <Icon size={16} className="text-gray-900" />
        <span>{title}</span>
      </h3>
      <p className="text-sm font-light text-gray-400 leading-[1.1] mt-2">
        {typeof desc === 'string' ? (
          desc
        ) : (
          <span dangerouslySetInnerHTML={desc} />
        )}
      </p>
    </article>
  );
};

export default ArticleItem;
