import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import styled from 'styled-components';
import { selectToken } from '../../../redux/app/selectors';
import NavLink from './components/NavLink';
import { loginRoute, registerRoute } from '../../../router/routes';
import { screens, useScreens } from '../../../utils/useScreens';

const StyleNavLink = styled(NavLink)`
  display: flex;
  gap: 5px;

  :hover {
    border-bottom: 1px solid white;
    text-decoration: none;
  }
`;

const LoginRegister = () => {
  const screen = useScreens();
  const location = useLocation();
  const token = useSelector(selectToken);

  if (token) {
    return null;
  }

  if (location.pathname === loginRoute) {
    return <StyleNavLink to={registerRoute}>Registracija</StyleNavLink>;
  }

  // Register link should be visible in the navbar only on the login page,
  // on every other page there should be Login link

  return (
    <StyleNavLink to={loginRoute}>
      {screen > screens.tablet && 'Prijava'} <LoginIcon />
    </StyleNavLink>
  );
};

export default LoginRegister;
