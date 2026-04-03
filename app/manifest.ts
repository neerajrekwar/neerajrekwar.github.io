import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Neeraj Rekwar | Full Stack Developer',
    short_name: 'NeerajRekwar',
    description: 'Portfolio of Neeraj Rekwar, a passionate Programmer and Entrepreneur specializing in Next.js, Tailwind CSS, and modern web development.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}