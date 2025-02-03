import Link from 'next/link';

type LinkItemProps = {
  path: string;
  content: string;
  className?: string;
}

const LinkItem = ({ path, content, className }: LinkItemProps) => {
  return (
    <Link href={path} className={`w-fit pb-[3px] border-b-[0.5px] border-gray-400 font-calibri text-xs ${className && className}`}>
      {content}
    </Link>
  );
};

export default LinkItem;
