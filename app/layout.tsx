// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Психологическая помощь — индивидуальные консультации онлайн и очно',
  description:
    'Премиальный психологический приём: работа с тревогой, выгоранием, самооценкой и отношениями. Спокойная, безопасная атмосфера. Онлайн и очно.',
  metadataBase: new URL('https://psychologist-landing-rouge.vercel.app/'), // замени на свой домен
  keywords: [
    'психолог',
    'психолог онлайн',
    'психотерапия',
    'тревога',
    'выгорание',
    'самооценка',
    'отношения',
    'консультация психолога',
  ],
  openGraph: {
    title: 'Психологическая помощь — индивидуальные консультации',
    description:
      'Индивидуальные консультации в спокойной и безопасной атмосфере. Работа с тревогой, выгоранием и отношениями.',
    url: 'https://psychologist-landing-rouge.vercel.app/', // замени на свой домен
    siteName: 'Психологическая практика',
    type: 'website',
    locale: 'ru_RU',
    images: [
      {
        url: '/og-image.png', // можешь позже добавить отдельную картинку
        width: 1200,
        height: 630,
        alt: 'Психологическая помощь',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Психологическая помощь — индивидуальные консультации',
    description:
      'Премиальный психологический приём: работа с тревогой, выгоранием, самооценкой и отношениями.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}









