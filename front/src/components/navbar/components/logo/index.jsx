import React from 'react';
import logo from '../../../../assets/Logo.jpg';
import { StyledLink, StyledLogo } from './styles';
import { homeRoute } from '../../../../app/router/routes';

export const Logo = () => {
  return (
    <StyledLink to={`${homeRoute}`}>
      <StyledLogo>
        <img src={logo} alt="logo" />
        <span>PodeliMaterijal</span>
      </StyledLogo>
    </StyledLink>
  );
};

export default Logo;
