import { useState, useRef, useLayoutEffect } from 'react';

export const useElementSizeOnResize = () => {
  const [width, setWidh] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef(undefined);

  useLayoutEffect(() => {
    let observer;
    if (ref.current) {
      // eslint-disable-next-line no-undef
      observer = new ResizeObserver(() => {
        setWidh(ref.current.offsetWidth);
        setHeight(ref.current.offsetHeight);
      });
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
    // eslint-disable-next-line
  }, [ref.current]);
  return { ref, width, height };
};

export default useElementSizeOnResize;
