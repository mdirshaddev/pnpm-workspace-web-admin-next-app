// Tailwind
import 'src/styles/globals.css';

// Google Font
import { Inter } from '@next/font/google';

// Contexts
import { ThemeProvider } from 'src/contexts/theme';
import { ViewProvider } from 'src/contexts/views';

import Header from 'src/components/layouts/header';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children
}: React.PropsWithChildren) {
  return (
    <html lang='en' className={inter.className}>
      <head>
        <title>Md Irshad - 💫 ServiceNow Developer</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'></meta>
        <meta
          name='description'
          content='My Personal Portfolio Website build with Next.js and Multiple Integrations and Services'
        />
        <link rel='icon' href='/logo.svg' />
      </head>
      <body>
        <ViewProvider>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </ViewProvider>
      </body>
    </html>
  );
}
