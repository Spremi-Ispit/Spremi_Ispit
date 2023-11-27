import React from 'react';
import styled from 'styled-components';
import { aboutRoute, profileRoute, usersRoute } from '../../../router/routes';
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

const StyledA = styled.a`
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

  return token ? (
    <ul>
      {about()}
      {reportBug()}
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
