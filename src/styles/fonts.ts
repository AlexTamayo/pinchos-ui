import localFont from 'next/font/local';

export const eras = localFont({
  src: [
    {
      path: '../../public/fonts/eras/eras-light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/eras/eras-medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/eras/eras-demi.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/eras/eras-bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/eras/eras-ultra.ttf',
      weight: '900',
      style: 'normal',
    }
  ],
  variable: '--font-eras',
  fallback: ['Arial', 'Helvetica', 'sans-serif']

})