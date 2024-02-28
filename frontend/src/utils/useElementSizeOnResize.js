import { useState, useLayoutEffect, useRef } from 'react';

export const useElementSizeOnResize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef(undefined);

  useLayoutEffect(() => {
    // eslint-disable-next-line no-undef
    const observer = new ResizeObserver(() => {
      // Wrap the callback in setTimeout to defer its execution
      setTimeout(() => {
        if (ref && ref.current) {
          setWidth(ref.current.offsetWidth);
          setHeight(ref.current.offsetHeight);
        }
      }, 0);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []); // Empty dependency array to run the effect once on mount

  return { ref, width, height };
};

export default useElementSizeOnResize;
