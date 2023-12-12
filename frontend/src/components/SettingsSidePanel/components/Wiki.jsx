import React from 'react';
import NavLink from './components/NavLink';
import { useSelector } from 'react-redux';
import { selectToken } from '../../../redux/app/selectors';

const Wiki = () => {
  const token = useSelector(selectToken);

  if (!token) {
    return null;
  }

  return (
    <NavLink as="a" href="https://elfak.akymaky.me" target="_blank">
      Wiki
    </NavLink>
  );
};

export default Wiki;
