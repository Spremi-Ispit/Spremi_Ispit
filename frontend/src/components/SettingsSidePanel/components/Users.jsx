import React from 'react';
import NavLink from './components/NavLink';
import { usersRoute } from '../../../router/routes';

const Users = () => {
  return <NavLink to={usersRoute}>Korisnici</NavLink>;
};

export default Users;
