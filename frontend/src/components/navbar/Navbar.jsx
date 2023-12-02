import React from 'react';
import styled from 'styled-components';
import Logo from './components/Logo';
import Profile from './components/Profile';
import About from './components/About';
import ReportBug from './components/ReportBug';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Users from './components/Users';
import Wiki from './components/Wiki';

const headerHeight = '54px';

const NavbarDiv = styled.div`
  position: relative;
  height: ${headerHeight};
`;

const StyledNav = styled.nav`
  position: fixed;
  height: ${headerHeight};
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--secondary);
  z-index: 999;
  padding-right: 20px;
`;

export const Navbar = () => {
  return (
    <NavbarDiv>
      <StyledNav>
        <Logo />
        <About />
        <Wiki />
        <ReportBug />
        <Users />
        <Profile />
        {/***** AUTH *****/}
        <Register />
        <Login />
        <Logout />
      </StyledNav>
    </NavbarDiv>
  );
};

export default Navbar;
