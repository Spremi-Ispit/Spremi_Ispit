import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/Logo.jpg';
import { homeRoute } from '../../../router/routes';
import NavLink from './components/NavLink';

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 0;
`;

const LogoDiv = styled.div`
  flex: 1;
`;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const Logo = () => {
  return (
    <LogoDiv>
      <StyledNavLink to={`${homeRoute}`}>
        <StyledImg src={logo} alt="logo" />
        <span>SI</span>
      </StyledNavLink>
    </LogoDiv>
  );
};

export default Logo;
