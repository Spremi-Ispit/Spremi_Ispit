import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { NavLink } from 'react-router-dom';

const FooterDiv = styled.footer`
  background-color: ${colors.footer};
  box-shadow: rgba(0, 0, 0, 0.75) 3px 1px 3px 0px;
  display: flex;
  flex-direction: column;
`;

const CaregoriesDiv = styled.div`
  display: flex;
`;

const StyledNavlink = styled(NavLink)`
  margin: 10px;
  text-transform: none;
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
  padding-left: 50px;
  padding-right: 50px;
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

const WantToDiv = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = () => {
  return (
    <FooterDiv>
      <CaregoriesDiv>
        <AboutDiv>
          <HeaderDiv>O projektu</HeaderDiv>
          Ovo je open-source projekat koji razvijaju studenti da bi olaksali
          pripremu/polaganje ispita. Cilj platforme je da olaksa deljenje
          materijala, postavljanje blanketa i resenja, beleski sa racunskih
          vezbi i predavanja kako bi svi materijali za pripremu ispita bili na
          jednom mestu.
        </AboutDiv>
        <JoinDiv>
          <HeaderDiv>Najbolji materijali na jednom mestu!</HeaderDiv>U situaciji
          u kojoj studenti često nailaze na nedostatak kvalitetnih materijala,
          često se suočavaju sa izazovima u vezi sa polaganjem ispita, uzimajuci
          privatne casove. Umesto da troše novac na privatne časove radi
          pristupa resenim materijalima, naš sajt nudi jednostavno rešenje - svi
          najbolji materijali, ocenjeni prema kvalitetu, su na jednom mestu.
        </JoinDiv>
        <BugsDiv>
          <HeaderDiv>
            Zelis da se prikljucis razvoju?
            <StyledNavlink>Kontaktiraj nas!</StyledNavlink>
          </HeaderDiv>

          <WantToDiv>
            <HeaderDiv>Zelis da:</HeaderDiv>
            <ul>
              <li>
                <NavLink
                  as="a"
                  href="https://docs.google.com/document/d/1AefnDWibn1vOFxZAfTC9L-vOkv2DqdEr94SYz4Nx_4o/edit?usp=sharing"
                  target="_blank"
                >
                  Prijavis bag/predlozis feature
                </NavLink>
              </li>
              <li>
                <NavLink
                  as="a"
                  href="https://trello.com/b/gF0nh6ti/spremiispit"
                  target="_blank"
                >
                  Vidis na cemu se trenutno radi
                </NavLink>
              </li>
            </ul>
          </WantToDiv>
        </BugsDiv>
      </CaregoriesDiv>
      <CopyRightDiv>
        <CopyrightIcon /> 2023
      </CopyRightDiv>
    </FooterDiv>
  );
};

export default Footer;
