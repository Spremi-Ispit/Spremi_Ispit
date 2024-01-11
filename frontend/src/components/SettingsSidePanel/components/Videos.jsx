import React from 'react';
import NavLink from './components/NavLink';
import { videosRoute } from '../../../router/routes';

const Videos = () => {
  return <NavLink to={videosRoute}>Video materijali</NavLink>;
};

export default Videos;
