import React from 'react';
import styled from 'styled-components';
import { profileRoute, usersRoute } from '../../../router/routes';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useAuthManager } from '../../../utils/managers/AuthManager';
import { selectToken } from '../../../redux/app/selectors';
import detectMouseButton, {
  mouseButtons,
} from '../../../utils/detectMouseButton';

const StyledDiv = styled.div`
  text-decoration: none;
  color: white;
  :hover {
    text-decoration: underline;
    color: white !important;
  }
`;

export const Authorized = () => {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const authManager = useAuthManager();

  const handleLogout = () => {
    authManager.logout();
  };

  const handleOnMouseDown = (ev, route) => {
    const button = detectMouseButton(ev);
    if (button === mouseButtons.left) {
      navigate(route);
    }

    if (button === mouseButtons.middle) {
      const newWindow = window.open(
        `${route}`,
        '_blank',
        'noopener,noreferrer'
      );
      if (newWindow) newWindow.opener = null;
    }
  };

  return token ? (
    <ul>
      <li>
        <StyledDiv onMouseDown={(ev) => handleOnMouseDown(ev, usersRoute)}>
          Korisnici
        </StyledDiv>
      </li>
      <li>
        <StyledDiv onMouseDown={(ev) => handleOnMouseDown(ev, profileRoute)}>
          Profil
        </StyledDiv>
      </li>
      <li>
        <StyledDiv onClick={handleLogout}>Odjavi se</StyledDiv>
      </li>
    </ul>
  ) : null;
};

export default Authorized;
