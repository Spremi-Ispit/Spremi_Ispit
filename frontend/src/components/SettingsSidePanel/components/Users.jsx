import React from 'react';
import NavLink from './components/NavLink';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../../redux/app/selectors';
import { usersRoute } from '../../../router/routes';

const Users = () => {
  const location = useLocation();
  const token = useSelector(selectToken);

  if (location.pathname === usersRoute || !token) {
    return null;
  }

  return <NavLink to={`${usersRoute}`}>Korisnici</NavLink>;
};

export default Users;
