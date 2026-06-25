import './globals.css';
import { Inter, Syne } from 'next/font/google';
import { siteMeta } from './shared/content';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

export const metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
