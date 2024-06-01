import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import NavLink from './components/NavLink';
import { selectToken } from '../../../redux/app/selectors';
import { screens, useScreens } from '../../../utils/useScreens';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRedux } from '../../../redux/useRedux';
import { appActions } from '../../../redux/app/slice';

const Logout = () => {
  const screen = useScreens();
  const token = useSelector(selectToken);
  const setToken = useRedux(appActions.setToken);

  if (!token) {
    return null;
  }

  return (
    <StyleNavLink onClick={() => setToken(null)}>
      {screen > screens.tablet && 'Odjavi se'} <LogoutIcon />
    </StyleNavLink>
  );
};

export default Logout;

const StyleNavLink = styled(NavLink)`
  display: flex;
  gap: 5px;

  :hover {
    border-bottom: 1px solid white;
    text-decoration: none;
  }
`;
