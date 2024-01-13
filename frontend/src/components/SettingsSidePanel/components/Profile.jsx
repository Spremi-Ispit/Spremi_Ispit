import React from 'react';
import NavLink from './components/NavLink';
import { useSelector } from 'react-redux';
import { selectUsername } from '../../../redux/app/selectors';
import { profilePostsRoute } from '../../../router/routes';
import { allowedUrlParams } from '../../../utils/managers/UrlManager';

const Profile = () => {
  const username = useSelector(selectUsername);

  return (
    <NavLink
      to={`${profilePostsRoute}?${allowedUrlParams.username}=${username}`}
    >
      Profil
    </NavLink>
  );
};

export default Profile;
