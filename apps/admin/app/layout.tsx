import '@/styles/global.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';
import React from 'react';
import DashboardWrapper from '@/layout/DashboardWrapper/DashboardWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CycleSmart Tech UI',
  description: "Recycle your tech, we'll pay you cash.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <DashboardWrapper>{children}</DashboardWrapper>
        </Providers>
      </body>
    </html>
  );
}
