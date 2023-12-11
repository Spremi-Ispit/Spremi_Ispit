import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import CopyrightIcon from '@mui/icons-material/Copyright';
import NavLink from './navbar/components/components/NavLink';

const FooterDiv = styled.footer`
  background-color: ${colors.footer};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  flex-direction: column;
`;

const LinksDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const StyledNavlink = styled(NavLink)`
  color: black;
`;

export const Footer = () => {
  return (
    <FooterDiv>
      <LinksDiv>
        <StyledNavlink>O nama</StyledNavlink>
        <StyledNavlink>Predlozi feature</StyledNavlink>
        <StyledNavlink>Prijavi bag</StyledNavlink>
      </LinksDiv>
      <CopyrightIcon /> 2023
    </FooterDiv>
  );
};

export default Footer;
