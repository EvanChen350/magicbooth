/**
 * @description This file contains the font configurations for the project.
 * @module assets/fonts
 * @see https://nextjs.org/docs/api-reference/next/font/google
 * @see https://nextjs.org/docs/api-reference/next/font/local
 *
 * As using Tailwindcss, the font configurations are set in the `tailwind.config.js` file.
 * Please remember to add the font configurations to the `tailwind.config.js` file.
 * And, also remember to add the font configurations to the RootLayout file.
 */

import {
  Bodoni_Moda,
  // Carlito,
  // Inter,
  Inconsolata,
  // Jost,
  // Roboto_Mono,
  Solway,
  // Zen_Kaku_Gothic_New,
  // Zen_Maru_Gothic,
} from 'next/font/google';
import localFont from 'next/font/local';

export const calibri = localFont({
  src: './Calibri/Calibri-Regular.ttf',
  variable: '--font-calibri',
});
// export const calibri = localFont({
//   src: [
//     {
//       path: './Calibri/Calibri-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './Calibri/Calibri-Italic.ttf',
//       weight: 'normal',
//       style: 'Italic',
//     },
//     {
//       path: './Calibri/Calibri-Bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
// });

// export const carlito = Carlito({
//   weight: ['400', '700'],
//   variable: '--font-carlito',
//   subsets: ['latin'],
// });
// export const robotoMono = Roboto_Mono({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
// });
// export const jost = Jost({ weight: '400', subsets: ['latin'] });
// export const inter = Inter({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
// });
// export const bodoniModa = Bodoni_Moda({
//   weight: ['400', '700'],
//   variable: '--font-bodoniModa',
//   subsets: ['latin'],
// });

export const bodoniModa = localFont({
  src: './Bodoni_Moda/BodoniModa-Italic-VariableFont_opsz,wght.ttf',
  variable: '--font-bodoniModa',
});
export const bodoniMT = localFont({
  src: './Bodoni_MT/Bodoni_MT.ttf',
  variable: '--font-bodoniMT',
});
export const inconsolata = Inconsolata({
  weight: ['400', '700'],
  variable: '--font-inconsolata',
  subsets: ['latin'],
});
export const solway = Solway({
  weight: ['300', '400', '700', '800'],
  variable: '--font-solway',
  subsets: ['latin'],
});
// export const zenMaru = Zen_Maru_Gothic({
//   weight: ['300', '400', '500', '700', '900'],
//   subsets: ['latin'],
// });
// export const zenKaku = Zen_Kaku_Gothic_New({
//   weight: ['300', '400', '500', '700', '900'],
//   subsets: ['latin'],
// });
