import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import CopyrightIcon from '@mui/icons-material/Copyright';
import NavLink from './navbar/components/components/NavLink';
import { aboutRoute } from '../router/routes';
import { fonts } from '../theme/fonts';

const FooterDiv = styled.footer`
  background-color: ${colors.footer};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
`;

const CaregoriesDiv = styled.div`
  display: flex;
`;

const StyledNavlink = styled(NavLink)`
  color: black;
  margin: 10px;
  :hover {
    color: black;
  }
`;

const CopyRightDiv = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid black;
  width: 100%;
  justify-content: center;
  padding: 5px;
  color: white;
  background-color: ${colors.filteri};
`;

const AboutDiv = styled.div`
  border-right: 1px solid black;
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: justify;
  padding: 10px;
  align-items: center;
`;

const HeaderDiv = styled.div`
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const JoinDiv = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 1px 1px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const BugsDiv = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Footer = () => {
  return (
    <FooterDiv>
      <CaregoriesDiv>
        <AboutDiv>
          {/* <StyledNavlink to={`${aboutRoute}`}>O projektu</StyledNavlink> */}
          <HeaderDiv>O projektu</HeaderDiv>
          Ovo je open-source projekat koji razvijaju studenti da bi olaksali
          pripremu/polaganje ispita. Cilj platforme je da olaksa deljenje
          materijala, postavljanje blanketa i resenja, beleski sa racunskih
          vezbi i predavanja kako bi svi materijali za pripremu ispita bili na
          jednom mestu.
        </AboutDiv>
        <JoinDiv>
          <HeaderDiv>Prikljuci se projektu</HeaderDiv>
          <ul>
            <li>Svidja ti se ideja</li>
            <li>Imas predlog</li>
            <li>Hoces da radis na projektu</li>
          </ul>
          <StyledNavlink>Kontaktiraj nas</StyledNavlink>
        </JoinDiv>
        <BugsDiv>
          <HeaderDiv>Prijavi bag</HeaderDiv>
          <ul>
            <li>Pronasao/la si problem</li>
            <li>Aplikacija ne radi</li>
          </ul>
          <StyledNavlink
            as="a"
            href="https://docs.google.com/document/d/1AefnDWibn1vOFxZAfTC9L-vOkv2DqdEr94SYz4Nx_4o/edit?usp=sharing"
            target="_blank"
          >
            Prijavi bag
          </StyledNavlink>
        </BugsDiv>
      </CaregoriesDiv>
      <CopyRightDiv>
        <CopyrightIcon /> 2023
      </CopyRightDiv>
    </FooterDiv>
  );
};

export default Footer;
