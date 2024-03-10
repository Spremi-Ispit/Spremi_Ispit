import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { screensCSS } from '../utils/useScreens';
import Instagram from '../assets/instagram.svg';
import NavLink from './NavLink';
import InstagramImgSrc from '../assets/instagram.png';

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
    flex-direction: column;
  }
`;

const LeftDiv = styled(SectionDiv)``;

const MiddleDiv = styled(SectionDiv)`
  gap: 5px;
`;

const RightDiv = styled(SectionDiv)`
  gap: 5px;
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
const IconSpan = styled.span`
  width: 20px;
`;

export const Footer = ({ className }) => {
  return (
    <FooterDiv className={className}>
      <CaregoriesDiv>
        <LeftDiv>
          <HeaderDiv>O projektu</HeaderDiv>
          Ovo je open-source projekat koji je pokrenut sa ciljem da studentima
          Elektronskog fakuteta pruži pristup rešenim materijalima, edukativnim
          videima i omogući im da dele svoja iskustva i mišljenja.
        </LeftDiv>
        <MiddleDiv>
          <HeaderDiv>Zainteresovani ste za saradnju?</HeaderDiv>
          <StyledNavlink href="https://www.instagram.com/spremiispit/">
            <InstagramImg src={InstagramImgSrc} alt="Follow Us On Instagram" />
            @SpremiIspit
          </StyledNavlink>
          <StyledNavlink href="mailto:spremiispit@gmail.com">
            ✉️ spremiispit@gmail.com
          </StyledNavlink>
        </MiddleDiv>
        <RightDiv>
          <HeaderDiv>Želite da budete deo projekta?</HeaderDiv>
          <StyledNavlink href="https://docs.google.com/document/d/1AefnDWibn1vOFxZAfTC9L-vOkv2DqdEr94SYz4Nx_4o/edit?usp=sharing">
            <IconSpan>🐞</IconSpan>
            Prijavite bag
          </StyledNavlink>
          <StyledNavlink href="https://docs.google.com/document/d/1AefnDWibn1vOFxZAfTC9L-vOkv2DqdEr94SYz4Nx_4o/edit?usp=sharing">
            <IconSpan>💡</IconSpan>
            Predložite feature
          </StyledNavlink>
          <StyledNavlink href="https://trello.com/b/gF0nh6ti/spremiispit">
            <IconSpan>🛠️</IconSpan>
            Vidite na čemu se trenutno radi
          </StyledNavlink>
          <StyledNavlink href="https://github.com/Spremi-Ispit/Spremi_Ispit">
            <IconSpan>💻</IconSpan>
            Github
          </StyledNavlink>
        </RightDiv>
      </CaregoriesDiv>
      <CopyRightDiv>
        <CopyrightIcon /> 2024
      </CopyRightDiv>
    </FooterDiv>
  );
};

export default Footer;

const StyledNavlink = styled(NavLink).attrs(() => ({
  as: 'a',
  target: '_blank',
}))`
  display: flex;
  gap: 5px;

  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 18px;
  text-decoration: none;

  color: #535cb5;
  :hover {
    color: #333da8;
  }
`;
