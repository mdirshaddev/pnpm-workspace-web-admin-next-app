'use client';

import { PropsWithChildren, useContext } from 'react';

import clsx from 'clsx';

import { Container } from 'src/shared/components';
import { ThemeContext } from 'src/shared/contexts/theme';

/* Defining the type of the props that the component will receive. */
interface SectionWithParallaxProps extends PropsWithChildren {}

/**
 * It's a React component that renders a container with a background image.
 * @param {SectionWithParallaxProps}  - SectionWithParallaxProps {
 * @returns A JSX.Element
 */
export default function SectionWithParallax({
  children
}: SectionWithParallaxProps): JSX.Element {
  const { mode } = useContext(ThemeContext);

  return (
    <div
      className={clsx(
        'relative overflow-hidden py-10 z-20 shadow-sectionShadow',
        `${mode === 'dark' ? 'Dark' : 'White'}`
      )}>
      <Container className='relative max-w-8xl mx-auto px-20 md:px-20 h-full'>
        {children}
      </Container>
    </div>
  );
}
