// Global style file - TailwindCSS
import 'src/styles/globals.css';

// Google Font
import { Inter } from '@next/font/google';

// Layout Context
import { SidebarProvider } from 'src/layout/contexts/sidebar';

// Shared Context
import { ViewProvider } from 'src/shared/contexts/views';
import { ThemeProvider } from 'src/shared/contexts/theme';

// Layout Component
import {
  Header,
  Sidebar,
  ThemePanel,
  ThemePanelButton
} from 'src/layout/components';

// Next Font - Inter
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
        <SidebarProvider>
          <ViewProvider>
            <ThemeProvider>
              <Header />
              {children}
              <Sidebar />
              <ThemePanel />
              <ThemePanelButton className='fixed z-50 right-4 bottom-4 rounded-md p-2' />
            </ThemeProvider>
          </ViewProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
