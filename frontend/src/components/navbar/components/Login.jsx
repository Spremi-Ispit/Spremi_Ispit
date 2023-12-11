import React from 'react';
import { useSelector } from 'react-redux';
import NavLink from './components/NavLink';
import { useLocation } from 'react-router-dom';
import { loginRoute } from '../../../router/routes';
import { selectToken } from '../../../redux/app/selectors';

const Login = () => {
  const location = useLocation();
  const token = useSelector(selectToken);

  // if (location.pathname === loginRoute || token) {
  //   return null;
  // }

  return <NavLink to={`${loginRoute}`}>Prijava</NavLink>;
};

export default Login;
