import React from 'react';
import NavLink from './components/NavLink';
import { communityToolsRoute } from '../../../router/routes';

const CommunityTools = () => {
  return <NavLink to={communityToolsRoute}>Alati zajednice</NavLink>;
};

export default CommunityTools;
