'use client';
import { cn } from '@/lib/utils';
import { ThemeProvider } from 'next-themes';
import { Roboto, Poppins, JetBrains_Mono } from 'next/font/google';
import Head from 'next/head';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700'], subsets: ['latin'] });
const mono = JetBrains_Mono({ weight: '400', subsets: ['cyrillic-ext', 'greek'] });

export const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
{/*         <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" /> */}
      </Head>
      <body className={cn(poppins.className, 'w-screen overflow-x-hidden min-h-screen')}>
        <ThemeProvider attribute="class" storageKey="theme" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default LayoutContainer;
