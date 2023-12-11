import React from 'react';
import NavLink from './components/NavLink';
import { useLocation } from 'react-router-dom';
import { aboutRoute } from '../../../../../router/routes';

const About = () => {
  const location = useLocation();

  if (location.pathname === aboutRoute) {
    return null;
  }

  return <NavLink to={`${aboutRoute}`}>O nama</NavLink>;
};

export default About;
