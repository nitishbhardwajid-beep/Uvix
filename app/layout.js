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
  keywords: siteMeta.keywords,
  canonical: siteMeta.siteUrl,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.siteUrl,
    siteName: siteMeta.companyName,
    type: 'website',
    images: [
      {
        url: `${siteMeta.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteMeta.companyName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMeta.title,
    description: siteMeta.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <link rel="canonical" href={siteMeta.siteUrl} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#050B18" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Uvix" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteMeta.companyName,
              url: siteMeta.siteUrl,
              logo: `${siteMeta.siteUrl}/logo.png`,
              description: siteMeta.description,
              sameAs: [
                'https://linkedin.com/company/uvix-technologies',
                'https://twitter.com/uvix_tech',
                'https://github.com/uvix-tech',
              ],
              contact: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'info@uvix.in',
                telephone: '+91-XXXXXXXXXX',
              },
              areaServed: ['IN', 'GB', 'US'],
              knowsAbout: [
                'AI & Machine Learning',
                'Cloud Infrastructure',
                'Data Engineering',
                'Cybersecurity',
                'Intelligent Automation',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
