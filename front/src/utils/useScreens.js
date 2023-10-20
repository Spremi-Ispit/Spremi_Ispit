import { useEffect, useState } from 'react';

// const breakpoints = {
//   xs: 320,
//   sm: 640,
//   md: 768,
//   lg: 1024,
//   xl: 1280,
// };

export const screens = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const screensCSS = {
  mobileS: `(max-width: ${screens.mobileS}px)`,
  mobileM: `(max-width: ${screens.mobileM}px)`,
  mobileL: `(max-width: ${screens.mobileL}px)`,
  tablet: `(max-width: ${screens.tablet}px)`,
  laptop: `(max-width: ${screens.laptop}px)`,
  laptopL: `(max-width: ${screens.laptopL}px)`,
  desktop: `(max-width: ${screens.desktop}px)`,
  desktopL: `(max-width: ${screens.desktop}px)`,
};

export const useScreens = () => {
  const { screenWidth: width } = useWindowSize();
  const screen = Object.values(screens).find((screen) => width < screen);

  if (screen) {
    return screen;
  }

  return screens.desktop;
};

//----------------HELPERS----------------

function useWindowSize() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    function resize() {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    }

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return { screenWidth, screenHeight };
}
