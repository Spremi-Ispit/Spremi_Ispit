import React from 'react';
import NavLink from './components/NavLink';
import { homeRoute } from '../../../router/routes';

const Home = () => {
  return <NavLink to={homeRoute}>Početna</NavLink>;
};

export default Home;
