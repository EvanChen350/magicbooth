'use client';

import Link from 'next/link';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import { Globe } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { capitalize, cn } from '@/lib/utils';
import { useTranslation } from '@/app/i18n/client';

type LangOption = {
  country: string;
  code: string;
};

const LangSwitcher = ({ className, lng }: { className?: string; lng: string }) => {
  const options: LangOption[] = [
    { country: 'English', code: 'en' }, // Native name is the same
    { country: '日本語', code: 'ja' },
    { country: '中文', code: 'cn' },
  ];
  const { t } = useTranslation(lng, 'header');
  const pathname = usePathname();
  const urlSegments = useSelectedLayoutSegments();
  // const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className={'relative'}>
        <DropdownMenu>
          <DropdownMenuTrigger className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-secondary-foreground hover:bg-secondary/90 h-9 rounded-md px-3 border-secondary-foreground border'>
            {t('header-lang')}
            <Globe className={'w-4 h-4 ml-2'} />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='rounded-none min-w-[8rem]'
            role={'menu'}
            aria-orientation={'vertical'}
            aria-labelledby={'options-menu'}
          >
            {options.map((lang) => {
              return (
                <Link key={lang.code} href={`/${lang.code}/${urlSegments.join('/')}`}>
                  <DropdownMenuItem
                    lang={lang.code}
                    className={`cursor-pointer block w-full px-4 py-2 font-solway text-left text-sm hover:bg-gray-600 ${
                      pathname === `/${lang.code}`
                        ? 'bg-gray-100 text-gray-900 hover:bg-gray-300'
                        : 'text-gray-300'
                    }`}
                  >
                    {capitalize(lang.country)}
                  </DropdownMenuItem>
                </Link>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* {isOptionsExpanded && (
          <div
            className={
              'absolute right-0 mt-2 w-full origin-top-right rounded-md bg-dropdown shadow-lg'
            }
          >
            <div
              className={'py-1'}
              role={'menu'}
              aria-orientation={'vertical'}
              aria-labelledby={'options-menu'}
            >
              {options.map((lang) => {
                return (
                  <Link key={lang.code} href={`/${lang.code}/${urlSegments.join('/')}`}>
                    <button
                      lang={lang.code}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-600 ${
                        pathname === `/${lang.code}`
                          ? 'bg-gray-300 text-primary hover:bg-gray-300'
                          : 'text-gray-400'
                      }`}
                    >
                      {capitalize(lang.country)}
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default LangSwitcher;
