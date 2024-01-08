import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import styled from 'styled-components';
import { selectToken } from '../../../redux/app/selectors';
import NavLink from './components/NavLink';
import { loginRoute } from '../../../router/routes';
import { screens, useScreens } from '../../../utils/useScreens';

const StyleNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const LoginRegister = () => {
  const screen = useScreens();
  const location = useLocation();
  const token = useSelector(selectToken);

  if (token) {
    return null;
  }

  if (location.pathname !== loginRoute) {
    return (
      <StyleNavLink to={`${loginRoute}`}>
        {screen > screens.tablet && 'Prijava'} <LoginIcon />
      </StyleNavLink>
    );
  } else {
    // return <NavLink to={`${registerRoute}`}>Registracija</NavLink>;
    return <StyleNavLink to={`${loginRoute}`}>Registracija</StyleNavLink>;
  }
};

export default LoginRegister;
