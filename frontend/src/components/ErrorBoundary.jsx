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
          <h1>Oops! :(</h1>
          <br />
          <h4>Nepoznata greska, sta se desilo? :)</h4>
          <br />
          <a
            as="a"
            href="https://docs.google.com/document/d/1AefnDWibn1vOFxZAfTC9L-vOkv2DqdEr94SYz4Nx_4o/edit?usp=sharing"
            target="_blank"
          >
            🐞Prijavi gresku
          </a>
          <br />
          <br />
          <p>{this.state.error.toString()}</p>
        </ErrorBoundaryDiv>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
