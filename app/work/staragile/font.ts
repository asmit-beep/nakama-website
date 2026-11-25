import localFont from 'next/font/local';

/** Each weight gets its own size-adjust, ascent, and descent so a swap keeps the same line breaks. */
export const saHeroFont = localFont({
  src: '../../../public/fonts/manrope-700.woff2',
  weight: '700',
  style: 'normal',
  display: 'swap',
  adjustFontFallback: 'Arial',
  fallback: ['Arial', 'sans-serif'],
  variable: '--sa-hero',
  preload: true,
});

export const saFont400 = localFont({
  src: '../../../public/fonts/manrope-400.woff2',
  weight: '400',
  style: 'normal',
  display: 'swap',
  adjustFontFallback: 'Arial',
  fallback: ['Arial', 'sans-serif'],
  variable: '--sa-400',
  preload: true,
});

export const saFont500 = localFont({
  src: '../../../public/fonts/manrope-500.woff2',
  weight: '500',
  style: 'normal',
  display: 'swap',
  adjustFontFallback: 'Arial',
  fallback: ['Arial', 'sans-serif'],
  variable: '--sa-500',
  preload: true,
});

export const saFont600 = localFont({
  src: '../../../public/fonts/manrope-600.woff2',
  weight: '600',
  style: 'normal',
  display: 'swap',
  adjustFontFallback: 'Arial',
  fallback: ['Arial', 'sans-serif'],
  variable: '--sa-600',
  preload: true,
});
