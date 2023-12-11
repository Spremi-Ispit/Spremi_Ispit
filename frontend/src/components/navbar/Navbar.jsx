import React from 'react';
import styled from 'styled-components';
import Logo from './components/Logo';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import { userRole } from '../../redux/app/state';
import { selectRole, selectToken } from '../../redux/app/selectors';
// import { userRole } from '../../utils/enums';
import Search from './components/Search';
import CreatePost from './components/CreatePost';
import Menu from './components/components/Menu/Menu';
import { useSelector } from 'react-redux';

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
  background-color: #222328;
  z-index: 999;
`;

const SideDiv = styled.div`
  padding: 0px 10px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const Navbar = () => {
  const token = useSelector(selectToken);

  return (
    <NavbarDiv>
      <StyledNav>
        <SideDiv>
          <Menu />
          <Logo />
        </SideDiv>
        <Search />
        <SideDiv>
          <CreatePost />
          {!token ? <Login /> : <Logout />}
        </SideDiv>
      </StyledNav>
    </NavbarDiv>
  );
};

export default Navbar;
