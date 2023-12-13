import React from 'react';
import NavLink from './components/NavLink';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUsername } from '../../../redux/app/selectors';
import { profileInfoRoute, profileRoute } from '../../../router/routes';
import { allowedUrlParams } from '../../../utils/managers/UrlManager';

const Profile = () => {
  const location = useLocation();
  const username = useSelector(selectUsername);

  if (location.pathname === profileRoute) {
    return null;
  }

  return (
    <NavLink
      to={`${profileInfoRoute}?${allowedUrlParams.username}=${username}`}
    >
      Profil
    </NavLink>
  );
};

export default Profile;
