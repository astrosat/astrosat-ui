import { useRef, useEffect } from 'react';

/**
 * @param {() => void} onClickaway
 */
export const useClickaway = onClickaway => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = event => {
      console.log(event);
      if (ref.current && onClickaway && !event?.path?.includes(ref.current)) {
        onClickaway();
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref };
};
