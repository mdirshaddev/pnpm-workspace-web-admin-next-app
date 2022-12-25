import 'app/styles/globals.css';
import type { ReactNode } from 'react';

import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <head>
        <title>Md Irshad | Admin Panel</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'></meta>
        <meta
          name='description'
          content='Admin Panel for my Portfolio Website build with Next.js and Multiple Integrations and Services'
        />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>{children}</body>
    </html>
  );
}
