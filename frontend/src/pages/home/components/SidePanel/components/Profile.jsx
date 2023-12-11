import React from 'react';
import NavLink from './components/NavLink';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { profileInfoRoute, profileRoute } from '../../../../../router/routes';
import { selectToken } from '../../../../../redux/app/selectors';

const Profile = () => {
  const location = useLocation();
  const token = useSelector(selectToken);

  if (location.pathname === profileRoute || !token) {
    return null;
  }

  return <NavLink to={`${profileInfoRoute}`}>Profil</NavLink>;
};

export default Profile;
