import React from 'react';
import NavLink from './components/NavLink';
import { useLocation } from 'react-router-dom';
import { usersRoute } from '../../../router/routes';
import { selectToken } from '../../../redux/app/selectors';
import { useSelector } from 'react-redux';

const Users = () => {
  const location = useLocation();
  const token = useSelector(selectToken);
  const role = JSON.parse(localStorage.getItem('app'))?.role;

  if (location.pathname === usersRoute || !token || role !== 'admin') {
    return null;
  }

  return <NavLink to={`${usersRoute}`}>Korisnici</NavLink>;
};

export default Users;
