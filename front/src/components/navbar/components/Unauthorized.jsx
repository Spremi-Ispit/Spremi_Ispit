import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { loginRoute, registerRoute } from '../../../router/routes';
import { selectToken } from '../../../redux/app/selectors';

const StyledDiv = styled.div`
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

  if (!token) {
    return (
      <ul>
        {register()}
        {login()}
      </ul>
    );
  }

  return null;
};

export default Unauthorized;
