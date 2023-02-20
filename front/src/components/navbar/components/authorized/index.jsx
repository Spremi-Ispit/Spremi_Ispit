import React from 'react';
import {
  profileRoute,
  tagsRoute,
  usersRoute,
} from '../../../../app/router/routes';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setRole, setUsername } from '../../../../app/redux/slices';
import { initialState } from '../../../../app/redux/state';
import { userRole } from '../../../../utils/enums';
import { StyledDiv } from './styles';

const Authorized = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.app.token);
  const username = useSelector((state) => state.app.username);
  const role = useSelector((state) => state.app.role);
  const dispatch = useDispatch();

  const handleProfile = () => {
    navigate({
      pathname: profileRoute,
      search: `username=${username}`,
    });
  };

  const handleLogout = () => {
    dispatch(setToken(initialState.token));
    dispatch(setRole(initialState.role));
    dispatch(setUsername(initialState.username));
  };

  return token ? (
    <ul>
      <li>
        <StyledDiv onClick={() => navigate(usersRoute)}>Korisnici</StyledDiv>
      </li>
      {userRole.admin === role ? (
        <li>
          <StyledDiv onClick={() => navigate(tagsRoute)}>Tagovi</StyledDiv>
        </li>
      ) : null}
      <li>
        <StyledDiv onClick={handleProfile}>Profil</StyledDiv>
      </li>
      <li>
        <StyledDiv onClick={handleLogout}>Odjavi se</StyledDiv>
      </li>
    </ul>
  ) : null;
};

export default Authorized;
