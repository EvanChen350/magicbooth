'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/app/i18n/client';

import LangSwitcher from './lang-switcher';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, 'hero');

  return (
    <header className='w-full font-solway'>
      <div className='mx-auto px-5 md:px-10'>
        <div className='relative h-fit bg-white border-b-2 border-gray-900'>
          {/* ...Tablet */}
          <div className='h-fit  grid grid-cols-3 py-6 '>
            <div className='lg:hidden flex justify-between items-center gap-1'>
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger className='flex items-center gap-1'>
                  <Menu
                    className='text-gray-900 fill-gray-900'
                    size={16}
                    strokeWidth={1}
                  />
                  <span className='font-calibri text-base font-normal'>
                    {t('hero-menu')}
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  onEscapeKeyDown={() => {
                    document.body.style.overflow = 'auto';
                    document.body.style.position = 'static';
                  }}
                >
                  {(t('hero-menu-items', { returnObjects: true }) as Array<any>).map(
                    (item, index) => (
                      <DropdownMenuItem
                        key={index}
                        onSelect={(e) => {
                          e.preventDefault();
                          document.body.style.overflow = 'auto';
                          document.body.style.position = 'static';
                        }}
                      >
                        <Link
                          href={`#${item.path}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.querySelector(`#${item.path}`);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                              document.body.style.overflow = 'auto';
                              document.body.style.position = 'static';
                            }
                          }}
                        >
                          {t(item.value)}
                        </Link>
                      </DropdownMenuItem>
                    ),
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <h1 className='text-lg font-bodoniModa font-bold tracking-wide hidden lg:block lg:col-start-1  '>
              {t('hero-mainTitle')}
            </h1>
            <LangSwitcher lng={lng} className='col-start-3 place-self-end' />
          </div>
          <h1 className='text-lg font-bodoniModa font-bold tracking-wide lg:hidden block text-center mb-5 '>
            {t('hero-mainTitle')}
          </h1>
        </div>
      </div>
    </header>
  );
}
