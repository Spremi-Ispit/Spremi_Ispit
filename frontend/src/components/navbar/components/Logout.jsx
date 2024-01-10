import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import NavLink from './components/NavLink';
import { selectToken } from '../../../redux/app/selectors';
import { useAuthManager } from '../../../utils/managers/AuthManager';
import { screens, useScreens } from '../../../utils/useScreens';
import LogoutIcon from '@mui/icons-material/Logout';

const StyleNavLink = styled(NavLink)`
  display: flex;
  gap: 5px;

  :hover {
    border-bottom: 1px solid white;
    text-decoration: none;
  }
`;

const Logout = () => {
  const screen = useScreens();
  const token = useSelector(selectToken);
  const authManager = useAuthManager();

  if (!token) {
    return null;
  }

  return (
    <StyleNavLink onClick={() => authManager.logout()}>
      {screen > screens.tablet && 'Odjavi se'} <LogoutIcon />
    </StyleNavLink>
  );
};

export default Logout;
