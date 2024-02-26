import LayoutContainer from '@/components/container/layout-container';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Uhmpasterig',
  description: 'Portfolio of a web developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutContainer>{children}</LayoutContainer>;
}