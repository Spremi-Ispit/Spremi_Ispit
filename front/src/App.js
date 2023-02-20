import React from 'react';
import Router from './app/router';
import ErrorBoundary from './components/errorBoundary';
function App() {
  return (
    // <ErrorBoundary>
    <Router />
    // </ErrorBoundary>
  );
}

export default App;
