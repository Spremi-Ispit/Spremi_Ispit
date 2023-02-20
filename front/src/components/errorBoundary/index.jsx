import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h1>Nesto je krenulo po zlu.</h1>
          <a href="http://localhost:3000/viewPost?postId=11">Prijavi gresku.</a>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
