import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

interface useScrollSpyProps {
  throttleMs?: number;
  className: string;
}

/**
 * It takes a class name as an argument, and returns the id of the element with that class name that is
 * closest to the top of the viewport
 * @param {useScrollSpyProps}  - `throttleMs` - the amount of time to wait before firing the scroll
 * event.
 * @returns The activeSelection is being returned.
 */
const useScrollSpy = ({ throttleMs, className }: useScrollSpyProps) => {
  const [activeSelection, setActiveSelection] = useState<string | null>(null);

  const actionSectionScrollSpy = throttle(() => {
    const sectionsClass = document.getElementsByClassName(className);

    if (!throttleMs) {
      throttleMs = 100;
    }

    let previewBox: DOMRect | null = null;
    let currentSectionId = activeSelection;

    for (let i = 0; i < sectionsClass.length; i++) {
      const sectionClass = sectionsClass[i];

      if (!currentSectionId) {
        currentSectionId =
          sectionClass.getAttribute('href')?.split('#')[1] ?? null;
      }

      const bbox = sectionClass.getBoundingClientRect();
      const prevHeight = previewBox ? bbox.top - previewBox.bottom : 0;
      const offset = Math.max(200, prevHeight / 4);

      // GetBoundingClientRect returns values relative to viewport
      if (bbox.top - offset < 0) {
        currentSectionId =
          sectionClass.getAttribute('href')?.split('#')[1] ?? null;

        previewBox = bbox;
        continue;
      }

      // No need to continue loop, if last element has been detected
      break;
    }

    setActiveSelection(currentSectionId);
  }, throttleMs);

  useEffect(() => {
    window.addEventListener('scroll', actionSectionScrollSpy);

    actionSectionScrollSpy();

    return () => window.removeEventListener('scroll', actionSectionScrollSpy);
  }, []);

  return activeSelection;
};

export default useScrollSpy;
