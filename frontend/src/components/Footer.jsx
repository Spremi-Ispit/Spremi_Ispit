import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { screensCSS } from '../utils/useScreens';
import Instagram from '../assets/instagram.svg';

const FooterDiv = styled.footer`
  background-color: ${colors.footer};
  box-shadow: rgba(0, 0, 0, 0.75) 3px 1px 3px 0px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const CaregoriesDiv = styled.div`
  display: flex;

  @media ${screensCSS.tablet} {
    display: grid;
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

  @media ${screensCSS.tablet} {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    justify-items: center;
    flex-direction: column;
  }
`;

const SectionDiv = styled.div`
  border-right: 1px solid black;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: justify;
  padding: 10px;

  @media ${screensCSS.tablet} {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    justify-items: center;
    flex-direction: column;
  }
`;

const LeftDiv = styled(SectionDiv)``;

const MiddleDiv = styled(SectionDiv)``;

const RightDiv = styled(SectionDiv)`
  align-items: center;
`;

const HeaderDiv = styled.div`
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
  text-align: center;
`;

const InstagramImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const Footer = () => {
  return (
    <FooterDiv>
      <CaregoriesDiv>
        <LeftDiv>
          <HeaderDiv>O projektu</HeaderDiv>
          Ovo je open-source projekat koji je pokrenut sa ciljem da studentima
          Elektronskog fakuteta pruži pristup rešenim materijalima, edukativnim
          videima i omogući im da dele svoja iskustva i mišljenja.
        </LeftDiv>
        <MiddleDiv>
          <HeaderDiv>Najbolji materijali na jednom mestu!</HeaderDiv>
          Umesto da trošite novac na privatne časove radi pristupa rešenim
          materijalima, naš sajt nudi jednostavno rešenje - svi najbolji
          materijali, ocenjeni prema kvalitetu, su na jednom mestu!
        </MiddleDiv>
        <RightDiv>
          <HeaderDiv>Zelis da budes deo projekta?</HeaderDiv>
          <ul>
            <li>
              <a
                as="a"
                href="https://docs.google.com/document/d/1AefnDWibn1vOFxZAfTC9L-vOkv2DqdEr94SYz4Nx_4o/edit?usp=sharing"
                target="_blank"
              >
                🐞Prijavi bag
              </a>
            </li>
            <li>
              <a
                as="a"
                href="https://docs.google.com/document/d/1AefnDWibn1vOFxZAfTC9L-vOkv2DqdEr94SYz4Nx_4o/edit?usp=sharing"
                target="_blank"
              >
                💡Predlozi feature
              </a>
            </li>
            <li>
              <a
                as="a"
                href="https://trello.com/b/gF0nh6ti/spremiispit"
                target="_blank"
              >
                🛠️Vidi na cemu se trenutno radi
              </a>
            </li>
            <li>
              <a
                as="a"
                href="https://www.instagram.com/spremiispit/"
                target="_blank"
                style={{ display: 'flex', alignItems: 'center', gap: '2px' }}
              >
                <InstagramImg src={Instagram} alt="Instagram" />
                Kontaktiraj nas
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Spremi-Ispit/Spremi_Ispit"
                target="_blank"
              >
                💻Github
              </a>
            </li>
          </ul>
        </RightDiv>
      </CaregoriesDiv>

      <CopyRightDiv>
        <CopyrightIcon /> 2024
      </CopyRightDiv>
    </FooterDiv>
  );
};

export default Footer;
