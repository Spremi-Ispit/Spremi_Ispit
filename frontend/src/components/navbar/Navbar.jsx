import React from 'react';
import styled from 'styled-components';
import Logo from './components/Logo';
import Logout from './components/Logout';
import { selectToken } from '../../redux/app/selectors';
import Search from './components/Search';
import CreatePost from './components/CreatePost';
import SettingsSidePanelMenu from './components/SettingsSidePanelMenu';
import { useSelector } from 'react-redux';
import LoginRegister from './components/LoginRegister';

const headerHeight = 64;

const NavbarDiv = styled.div`
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  min-width: fit-content;
  background-color: #222328;
  z-index: 999;
  height: ${headerHeight}px;

  /* GRID LAYOUT */
  display: grid;

  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 0px;
  height: 100%;
`;

const LeftDiv = styled.div`
  padding: 0px 10px;
  display: flex;
  align-items: center;
  white-space: nowrap;

  /* GRID LAYOUT */

  grid-row-start: 1;
  grid-column-start: 1;

  grid-row-end: 2;
  grid-column-end: 2;
`;

const MiddleDiv = styled.div`
  padding: 0px 10px;
  display: flex;
  align-items: center;
  white-space: nowrap;

  /* GRID LAYOUT */

  grid-row-start: 1;
  grid-column-start: 2;

  grid-row-end: 2;
  grid-column-end: 3;
`;

const RightDiv = styled.div`
  padding: 0px 10px;
  display: flex;
  align-items: center;
  white-space: nowrap;

  /* GRID LAYOUT */

  grid-row-start: 1;
  grid-column-start: 3;

  grid-row-end: 2;
  grid-column-end: 4;

  justify-content: end;
`;

export const Navbar = () => {
  const token = useSelector(selectToken);

  return (
    <NavbarDiv>
      <LeftDiv>
        <SettingsSidePanelMenu />
        <Logo />
      </LeftDiv>
      <MiddleDiv>
        <Search />
      </MiddleDiv>
      <RightDiv>
        <CreatePost />
        {!token ? <LoginRegister /> : <Logout />}
      </RightDiv>
    </NavbarDiv>
  );
};

export default Navbar;
