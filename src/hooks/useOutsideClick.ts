import { MouseEventHandler, useEffect, useRef } from 'react';

export const useOutsideClick = (callback: MouseEventHandler, reference: React.RefObject<HTMLDivElement>) => {
  const ref = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node) && !reference.current?.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
};