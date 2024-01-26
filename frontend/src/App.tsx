import ErrorBoundary from './components/ErrorBoundary';
import useCorrectAppVersion from './utils/useCorrectAppVersion';
import Router from './router/Router';

function App() {
  useCorrectAppVersion();

  return (
    <>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </>
  );
}

export default App;
