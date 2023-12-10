import React from 'react';
import { useSelector } from 'react-redux';
import NavLink from './components/NavLink';
import { selectToken } from '../../../redux/app/selectors';
import { useAuthManager } from '../../../utils/managers/AuthManager';

const Logout = () => {
  const token = useSelector(selectToken);
  const authManager = useAuthManager();

  if (!token) {
    return null;
  }

  return <NavLink onClick={() => authManager.logout()}>Odjavi se</NavLink>;
};

export default Logout;
