// Global CSS
import 'src/styles/globals.css';

// Google Font
import { Inter } from '@next/font/google';

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
          content='My Personal Portfolio Website build with TypeScript, Next.js, React, Material UI and Multiple Integrations and Services'
        />
        <meta
          name='My Favourite Technology Stack'
          content='Next.JS, TypeScript, AWS, Node.js, Prisma, TailwindCSS, Material UI, Github Actions, Terraform, Storybook, Cypress'
        />
        <link rel='icon' href='/logo.svg' />
      </head>
      <body>{children}</body>
    </html>
  );
}
