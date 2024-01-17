import ErrorBoundary from './components/ErrorBoundary';
import useCorrectAppVersion from './config/useCorrectAppVersion';
import Router from './router/Router';
import useGoogleAnalytics from './utils/useGoogleAnalytics';

function App() {
  useCorrectAppVersion();
  useGoogleAnalytics();

  return (
    <>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </>
  );
}

export default App;
