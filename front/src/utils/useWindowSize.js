import React, { useEffect, useState } from 'react';
function useWindowSize() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function resize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return screenWidth;
}

export default useWindowSize;
