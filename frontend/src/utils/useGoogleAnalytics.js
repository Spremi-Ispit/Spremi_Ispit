import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-J24NM9G7SY');

function useGoogleAnalytics() {
  let location = useLocation();

  useEffect(() => {
    ReactGA.send('pageview', location.pathname);
  }, [location]);
}

export default useGoogleAnalytics;
