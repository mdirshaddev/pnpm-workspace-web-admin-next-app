'use client';

import { PropsWithChildren, useContext } from 'react';
import { ThemeContext } from 'src/shared/contexts/theme';

interface OverlayProps extends PropsWithChildren {}

/**
 * A function that is returning a div.
 * @returns JSX.Element
 */
export default function Overlay({ children }: OverlayProps) {
  const { mode } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundImage: `${
          mode === 'dark'
            ? 'linear-gradient(#161c24f0, #161c24f0)'
            : 'linear-gradient(to top, #dfe9f3 0%, white 100%)'
        }`
      }}
      className='fixed top-0 left-0 w-screen h-screen bg-no-repeat bg-center'>
      {children}
    </div>
  );
}
