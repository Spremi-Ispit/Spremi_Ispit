import ErrorBoundary from "./components/ErrorBoundary";
import useCorrectAppVersion from "./config/useCorrectAppVersion";
import Router from "./router/Router";

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
