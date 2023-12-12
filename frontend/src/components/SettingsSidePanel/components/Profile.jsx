import React from 'react';
import NavLink from './components/NavLink';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../../redux/app/selectors';
import { profileInfoRoute, profileRoute } from '../../../router/routes';

const Profile = () => {
  const location = useLocation();
  const token = useSelector(selectToken);

  if (location.pathname === profileRoute || !token) {
    return null;
  }

  return <NavLink to={`${profileInfoRoute}`}>Profil</NavLink>;
};

export default Profile;
