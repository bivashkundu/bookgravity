import '@/styles/global.scss';
import type { Metadata } from 'next';
import Providers from './providers';
import React from 'react';

export const metadata: Metadata = {
  title: 'BookGravity Admin',
  description: 'BookGravity Admin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
