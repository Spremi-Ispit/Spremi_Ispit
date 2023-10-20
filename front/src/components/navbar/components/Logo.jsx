import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo.jpg';
import { homeRoute } from '../../../router/routes';

const StyledLogo = styled.div`
  padding: 2px;

  img {
    width: 50px;
    height: 50px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  :hover span {
    text-decoration: none;
    color: white;
  }
`;

export const Logo = () => {
  return (
    <StyledLink to={`${homeRoute}`}>
      <StyledLogo>
        <img src={logo} alt="logo" />
        <span>SI</span>
      </StyledLogo>
    </StyledLink>
  );
};

export default Logo;
