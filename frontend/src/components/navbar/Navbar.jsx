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
import { userRole } from '../../redux/app/state';
import { selectRole } from '../../redux/app/selectors';
// import { userRole } from '../../utils/enums';
import Wiki from './components/Wiki';
import Menu from './components/Menu';

const headerHeight = 64;

const NavbarDiv = styled.div`
  position: relative;
  height: ${headerHeight}px;
`;

const StyledNav = styled.nav`
  position: fixed;
  height: ${headerHeight}px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #1a1a1a;
  z-index: 999;
`;

const SpremiIspitLabel = styled.label`
  color: white;
  font-family: Libre Bodoni;
  font-size: 400;
  font-style: italic;
`;

export const Navbar = () => {
  const role = JSON.parse(localStorage.getItem('app'))?.role;

  return (
    <NavbarDiv>
      <StyledNav>
        <Menu />
        <Logo />
        <SpremiIspitLabel>Spremi Ispit</SpremiIspitLabel>;
        {/* <About />
        <Wiki />
        <ReportBug />
        {role === 'admin' && <Users />}
        <Profile />
        <Register />
        <Login />
        <Logout /> */}
      </StyledNav>
    </NavbarDiv>
  );
};

export default Navbar;
