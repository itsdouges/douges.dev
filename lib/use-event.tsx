import { useEffect, useRef } from 'react';

export default function useEvent<K extends keyof HTMLElementEventMap>(
  type: K,
  callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any
) {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener(type, callback);
    }
    return () => {
      if (element) {
        element.removeEventListener(type, callback);
      }
    };
  }, [callback, type]);

  return ref;
}
