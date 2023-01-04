'use client';

import { FC, PropsWithChildren, useContext, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

import { ViewContext } from 'src/contexts/views';

/* Defining the type of the props that the component will receive. */
interface SectionWithParallaxProps extends PropsWithChildren {}

/**
 * The SectionWithParallax component is a functional component that renders a div with a className of
 * bg-[#000] text-[#43176d] z-50 shadow-sectionShadow and returns the children prop.
 * @param  - FC<SectionWithParallaxProps> = ({ children }) => {
 * @returns A function that returns a div.
 */
const SectionWithParallax: FC<SectionWithParallaxProps> = ({ children }) => {
  const { ref, inView } = useInView();
  const { getViewStatus } = useContext(ViewContext);

  useEffect(() => {
    // handling concurrency
    let ignore: boolean = false;
    if (!ignore) {
      getViewStatus(inView);
    }
    return () => {
      ignore = true;
    };
  }, [inView]);
  return (
    <div
      ref={ref}
      className='static lg:relative overflow-hidden  bg-[#f9fafb] dark:bg-[#161c24] text-[#43176d] py-10 z-20 shadow-sectionShadow'>
      {children}
    </div>
  );
};

export default SectionWithParallax;
