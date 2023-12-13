import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectToken } from '../../../redux/app/selectors';
import NavLink from './components/NavLink';
import { loginRoute, registerRoute } from '../../../router/routes';

const LoginRegister = () => {
  const location = useLocation();
  const token = useSelector(selectToken);

  if (token) {
    return null;
  }

  if (location.pathname !== loginRoute) {
    return <NavLink to={`${loginRoute}`}>Prijava</NavLink>;
  } else {
    // return <NavLink to={`${registerRoute}`}>Registracija</NavLink>;
    return <NavLink to={`${loginRoute}`}>Prijava</NavLink>;
  }
};

export default LoginRegister;
