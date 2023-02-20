import React from 'react';
import { loginRoute, registerRoute } from '../../../../app/router/routes';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { StyledDiv } from './styles';

const Unauthorized = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.app.token);

  return !token ? (
    <ul>
      <li>
        <StyledDiv onClick={() => navigate(registerRoute)}>
          Registracija
        </StyledDiv>
      </li>
      <li>
        <StyledDiv onClick={() => navigate(loginRoute)}>Prijava</StyledDiv>
      </li>
    </ul>
  ) : null;
};

export default Unauthorized;
