import React from 'react';
import { StyledNav, StyledHeader } from './styles';
import Authorized from './components/authorized';
import Unauthorized from './components/unauthorized';
import Logo from './components/logo';

export const Navbar = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <Logo />
        <Authorized />
        <Unauthorized />
      </StyledNav>
    </StyledHeader>
  );
};

export default Navbar;
