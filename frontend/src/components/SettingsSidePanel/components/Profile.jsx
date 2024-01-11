import React from 'react';
import NavLink from './components/NavLink';
import { useSelector } from 'react-redux';
import { selectUsername } from '../../../redux/app/selectors';
import { profileInfoRoute } from '../../../router/routes';
import { allowedUrlParams } from '../../../utils/managers/UrlManager';

const Profile = () => {
  const username = useSelector(selectUsername);

  return (
    <NavLink
      to={`${profileInfoRoute}?${allowedUrlParams.username}=${username}`}
    >
      Profil
    </NavLink>
  );
};

export default Profile;
