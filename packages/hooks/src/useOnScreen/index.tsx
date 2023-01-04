import type { PropsWithChildren, RefObject } from 'react';

import { useState, useEffect, useRef } from 'react';

/**
 * It returns a boolean value that tells you whether the element is in view or not
 * @param ref - RefObject<HTMLElement>
 * @returns The useOnScreen hook returns a boolean value that tells you whether the element is in view
 * or not.
 */
const useOnScreen = (ref: RefObject<HTMLDivElement | null>) => {
  const [isInView, setIsInView] = useState(false);

  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      console.log(entry);
      // The IntersectionObserverEntry interface's read-only
      // intersectionRatio property tells you how much of the
      // target element is currently visible within the root's
      // intersection ratio, as a value between 0.0 and 1.0.
      if (entry.intersectionRatio > 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    });
    return () => {
      observerRef.current?.disconnect();
    };
  }, [ref]);

  return isInView;
};

export default useOnScreen;
