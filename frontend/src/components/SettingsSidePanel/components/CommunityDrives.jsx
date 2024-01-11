import React from 'react';
import NavLink from './components/NavLink';
import { communityDrivesRoute } from '../../../router/routes';

const CommunityDrives = () => {
  return <NavLink to={communityDrivesRoute}>Drive linkovi</NavLink>;
};

export default CommunityDrives;
