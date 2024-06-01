import ErrorBoundary from './components/ErrorBoundary';
// import useCorrectAppVersion from './utils/useCorrectAppVersion';
import Router from './router/Router';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

ReactGA.initialize('G-J24NM9G7SY');

function App() {
  // to use socketManager in code, first have to initialize sockets with useSockets hook in App.jsx
  // useCorrectAppVersion();
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
    });
  }, [location]);

  return (
    <>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </>
  );
}

export default App;
