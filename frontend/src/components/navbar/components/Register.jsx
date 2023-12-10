import React from 'react';
import { useSelector } from 'react-redux';
import NavLink from './components/NavLink';
import { useLocation } from 'react-router-dom';
import { registerRoute } from '../../../router/routes';
import { selectToken } from '../../../redux/app/selectors';

const Register = () => {
  const location = useLocation();
  const token = useSelector(selectToken);

  if (location.pathname === registerRoute || token) {
    return null;
  }

  return <NavLink to={`${registerRoute}`}>Registracija</NavLink>;
};

export default Register;
