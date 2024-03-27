import LayoutContainer from '@/components/containers/LayoutContainer';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Uhmpasterig',
  description: 'Portfolio of a web developer',
  openGraph: {
    title: 'Uhmpasterig',
    description: 'Portfolio of a web & backend developer',
    url: 'https://lucaa.sh/',
    siteName: 'Uhmpasterig',
    type: 'website',
    images: [
      {
        url: 'https://lucaa.sh/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Uhmpasterig',
      },
    ],
    locale: 'en_US',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
