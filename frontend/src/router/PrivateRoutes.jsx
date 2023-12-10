import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import * as routes from './routes';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/app/selectors';

export const PrivateRoutes = () => {
  const token = useSelector(selectToken);

  if (token) {
    return <Outlet />;
  }

  return <Navigate replace to={routes.loginRoute} />;
};

export default PrivateRoutes;
