import React from 'react';
import styled from 'styled-components';
import Logo from './components/Logo';
import Authorized from './components/Authorized';
import Unauthorized from './components/Unauthorized';

const headerHeight = '54px';

const StyledHeader = styled.header`
  color: white;
  border-bottom: 1px solid black;
  position: relative;
  height: ${headerHeight};
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  background-color: var(--secondary);
  z-index: 999;
  padding-right: 20px;
  top: 0;
  height: ${headerHeight};

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  div:hover {
    color: blue;
  }

  ul {
    list-style: none;
    display: flex;
    column-gap: 1rem;
    align-items: center;
  }
`;

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
