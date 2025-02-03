import { useState, useEffect } from 'react';
import { getMediaQueryValue } from '@/lib/utils';

/**
 * Custom hook that returns a boolean indicating whether the current viewport matches the specified media query.
 * @param query - The media query string to match against the viewport.
 * @returns A boolean indicating whether the current viewport matches the specified media query.
 */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener('change', listener);

    return () => {
      media.removeEventListener('change', listener);
    };
  }, [matches, query]);

  return matches;
}

//! ...something wrong with the document example...
/**
 * Checks if the current viewport matches the XXSmall breakpoint.
 * @returns {boolean} Returns true if the viewport matches the XXSmall breakpoint, otherwise false.
 *
 * @example
 * Returns true if the viewport matches the XXSmall breakpoint (e.g., width < 320px)
 */
export const useIsXXSmall = () =>
  useMediaQuery(`(min-width: ${getMediaQueryValue('xxsm')})`);

export const useIsXSmall = () =>
  useMediaQuery(`(min-width: ${getMediaQueryValue('xsm')})`);

export const useIsSmall = () => useMediaQuery(`(min-width: ${getMediaQueryValue('sm')})`);

export const useIsMedium = () =>
  useMediaQuery(`(min-width: ${getMediaQueryValue('md')})`);

export const useIsLarge = () => useMediaQuery(`(min-width: ${getMediaQueryValue('lg')})`);

export const useIsXLarge = () =>
  useMediaQuery(`(min-width: ${getMediaQueryValue('xl')})`);

export const useIsXXLarge = () =>
  useMediaQuery(`(min-width: ${getMediaQueryValue('xxl')})`);

export default useMediaQuery;
