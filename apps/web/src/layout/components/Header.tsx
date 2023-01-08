'use client';

// React
import { useContext, Fragment } from 'react';

// clsx
import clsx from 'clsx';

// Shared Context
import { ViewContext } from 'src/shared/contexts/views';

// Shared Component
import { Container } from 'src/shared/components';

// Utilities
import { BrandingLogo, NavListLinks, MenuButton } from './utilities';
import { ThemeContext } from 'src/shared/contexts/theme';

export default function Header() {
  const { mode } = useContext(ThemeContext);
  const { isInView } = useContext(ViewContext);
  console.log('header Context value ', isInView);

  return (
    <header
      title='Header'
      className={clsx(
        'transition-all fixed inset-x-0 top-0 w-full flex flex-row items-center z-40',
        `${
          isInView
            ? `${
                mode === 'dark'
                  ? 'HeaderDark shadowHeaderDark'
                  : 'HeaderLight shadowHeaderLight'
              } backdrop-blur h-[70px] md:h-20`
            : 'bg-transparent h-[70px] md:h-20'
        }`
      )}>
      <Container className='w-full md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto md: px-4 md:px-8 flex flex-row items-center justify-between h-full'>
        <BrandingLogo />
        <NavListLinks />
        <MenuButton />
      </Container>
    </header>
  );
}
