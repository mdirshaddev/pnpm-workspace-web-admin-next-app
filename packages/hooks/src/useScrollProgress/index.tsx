import { useState } from 'react';
import useWindowEvent from '../useWindowEvent';

// TODO: Implement on route change of next or react app loader to be set to zero value
/**
 * It returns a number between 0 and 1 that represents the percentage of the page that has been
 * scrolled.
 * @returns The scroll progress of the page.
 */
const useScrollProgress = () => {
  const [pageVerticalOffset, setPageVerticalOffset] = useState(0);

  // can be used in SSR
  if (typeof window !== undefined) {
    const onHandleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const windowHeight = scrollHeight - clientHeight;
      const scrollValue = Number(totalScroll / windowHeight);
      // When Window have no scrollbar meaning scrollheight zero do not show loader
      if (scrollValue == 0) {
        setPageVerticalOffset(0);
      } else {
        setPageVerticalOffset(scrollValue);
      }
    };
    useWindowEvent(window, 'scroll', onHandleScroll, { passive: true });
  }

  return pageVerticalOffset;
};

export default useScrollProgress;
