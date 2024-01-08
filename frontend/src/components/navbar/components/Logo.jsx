import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/Logo.jpg';
import { homeRoute } from '../../../router/routes';
import NavLink from './components/NavLink';
import { fonts } from '../../../theme/fonts';
import { screens, useScreens } from '../../../utils/useScreens';

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 0;
`;

const LogoDiv = styled.div``;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`;

const SpremiIspitLabel = styled.label`
  color: white;
  ${fonts(16, 400, 'italic')}
  cursor: pointer;
`;

export const Logo = () => {
  const screen = useScreens();
  return (
    <LogoDiv>
      <StyledNavLink to={`${homeRoute}`}>
        <StyledImg src={logo} alt="logo" />
        {screen > screens.tablet && (
          <SpremiIspitLabel>Spremi Ispit</SpremiIspitLabel>
        )}
      </StyledNavLink>
    </LogoDiv>
  );
};

export default Logo;
