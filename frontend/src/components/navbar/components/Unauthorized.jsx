import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { aboutRoute, loginRoute, registerRoute } from '../../../router/routes';
import { selectToken } from '../../../redux/app/selectors';

const StyledDiv = styled.div`
  text-decoration: none;
  color: white;
  :hover {
    text-decoration: underline;
    color: white !important;
  }
`;

const StyledA = styled.a`
  text-decoration: none;
  color: white;
  :hover {
    text-decoration: underline;
    color: white !important;
  }
`;

export const Unauthorized = () => {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const location = useLocation();

  const register = () => {
    if (location.pathname !== registerRoute) {
      return (
        <li>
          <StyledDiv onClick={() => navigate(registerRoute)}>
            Registracija
          </StyledDiv>
        </li>
      );
    }
    return null;
  };

  const login = () => {
    if (location.pathname !== loginRoute) {
      return (
        <li>
          <StyledDiv onClick={() => navigate(loginRoute)}>Prijava</StyledDiv>
        </li>
      );
    }

    return null;
  };

  const about = () => {
    if (location.pathname !== aboutRoute) {
      return (
        <li>
          <StyledDiv onClick={() => navigate(aboutRoute)}>O nama</StyledDiv>
        </li>
      );
    }

    return null;
  };

  const reportBug = () => {
    return (
      <li>
        <StyledA href="https://docs.google.com/document/d/1AefnDWibn1vOFxZAfTC9L-vOkv2DqdEr94SYz4Nx_4o/edit?usp=sharing">
          Prijavi bag
        </StyledA>
      </li>
    );
  };

  if (!token) {
    return (
      <ul>
        {about()}
        {reportBug()}
        {register()}
        {login()}
      </ul>
    );
  }

  return null;
};

export default Unauthorized;
