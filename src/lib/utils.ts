import { type Breakpoint } from './types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getMediaQueryValue = (breakpoint: Breakpoint): string => {
  const breakpoints: Record<Breakpoint, string> = {
    'xxsm': '320px',
    'xsm': '480px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    'xxl': '1536px',
  };

  return breakpoints[breakpoint] || '0px'; // Default to '0px' if invalid breakpoint
};