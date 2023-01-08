import { useEffect } from 'react';

/**
 * It's a React hook that adds an event listener to the window object and returns a function that
 * removes the event listener.
 * @param object - Window & typeof globalThis
 * @param event - keyof WindowEventMap
 * @param callback - () => void
 * @param {boolean | AddEventListenerOptions} [options] - boolean | AddEventListenerOptions
 */
export const useWindowEvent = (
  object: Window & typeof globalThis,
  event: keyof WindowEventMap,
  callback: () => void,
  options?: boolean | AddEventListenerOptions
) => {
  useEffect(() => {
    object.addEventListener(event, callback, options);
    return () => object.removeEventListener(event, callback, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useWindowEvent;
