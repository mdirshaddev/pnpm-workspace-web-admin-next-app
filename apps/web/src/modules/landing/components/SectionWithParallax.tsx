'use client';

import { FC, PropsWithChildren, useContext, useEffect, useRef } from 'react';

import clsx from 'clsx';

import { useInView } from 'react-intersection-observer';

import { ViewContext } from 'src/shared/contexts/views';

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
  const { mode, presetColor } = useContext(ThemeContext);
  const { getViewStatus } = useContext(ViewContext);
  const { ref, inView } = useInView();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      getViewStatus(true);
    } else {
      getViewStatus(false);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={clsx(
        'relative overflow-hidden py-10 z-20 shadow-sectionShadow',
        `${mode === 'dark' ? 'Dark' : 'White'}`
      )}>
      <Container className='relative max-w-8xl mx-auto px-4 md:px-8 h-full'>
        {children}
      </Container>
    </div>
  );
}
