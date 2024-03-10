import ErrorBoundary from './components/ErrorBoundary';
import useCorrectAppVersion from './utils/useCorrectAppVersion';
import Router from './router/Router';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-J24NM9G7SY');

ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
});

function App() {
  useCorrectAppVersion();

  // let location = useLocation();

  // useEffect(() => {
  //   ReactGA.send('pageview', location.pathname);
  // }, [location]);

  return (
    <>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </>
  );
}

export default App;
