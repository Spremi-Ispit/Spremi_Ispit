import React from 'react';
import NavLink from './components/NavLink';
import { communityGithubRoute } from '../../../router/routes';

const CommunityGithub = () => {
  return <NavLink to={communityGithubRoute}>Github linkovi</NavLink>;
};

export default CommunityGithub;
