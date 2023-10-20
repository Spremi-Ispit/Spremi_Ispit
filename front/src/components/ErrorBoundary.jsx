import React from 'react';

import styled from 'styled-components';

const ErrorBoundaryDiv = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryDiv>
          <h2>Error:</h2>
          <br />
          <h3>{this.state.error.toString()}</h3>
          <br />
          <br />
          <h4>Please contact the admin.</h4>
        </ErrorBoundaryDiv>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
