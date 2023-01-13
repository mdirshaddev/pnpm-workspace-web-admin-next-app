'use client';

// React
import { useContext, useState } from 'react';

// clsx
import clsx from 'clsx';

// Shared Context
import { ThemeContext } from 'src/shared/contexts/theme';

// Shared Component
import { Container } from 'src/shared/components';

// Utilities
import { BrandingLogo, NavListLinks, MenuButton } from './utilities';

// Custom Hooks
import { useWindowEvent } from '@mdirshaddev/hooks';

export default function Header() {
  const { mode } = useContext(ThemeContext);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  // When on client side
  if (typeof window !== 'undefined') {
    let scrollHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = Math.floor(Number(totalScroll / windowHeight) * 100);
      console.log(scroll);
      if (scroll > 20) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    useWindowEvent(window, 'scroll', scrollHandler, {
      passive: true
    });
  }

  return (
    <div
      title='Header'
      className={clsx(
        'transition-all fixed inset-x-0 top-0 w-full flex flex-row items-center z-40 h-[70px] md:h-20',
        `${
          isScroll
            ? `${
                mode === 'dark'
                  ? 'HeaderDark shadowHeaderDark'
                  : 'HeaderLight shadowHeaderLight'
              } backdrop-blur`
            : 'bg-transparent'
        }`
      )}>
      <Container className='w-full md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto md: px-4 md:px-8 flex flex-row items-center justify-between h-full'>
        <BrandingLogo />
        <NavListLinks />
        <MenuButton />
      </Container>
    </div>
  );
}
