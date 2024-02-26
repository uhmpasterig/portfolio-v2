'use client';
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
      </Head>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" storageKey="theme" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default LayoutContainer;