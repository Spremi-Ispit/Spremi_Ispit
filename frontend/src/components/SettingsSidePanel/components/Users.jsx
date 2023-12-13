import React from 'react';
import NavLink from './components/NavLink';
import { useLocation } from 'react-router-dom';
import { usersRoute } from '../../../router/routes';

const Users = () => {
  const location = useLocation();

  if (location.pathname === usersRoute) {
    return null;
  }

  return <NavLink to={`${usersRoute}`}>Korisnici</NavLink>;
};

export default Users;
