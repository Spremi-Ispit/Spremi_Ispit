import React from 'react';
import styled from 'styled-components';
import NavLink from '../../../../../../../components/NavLink';
import PosloviRsSrc from './PosloviRS.jpg';

const PosloviRSDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  gap: 10px;
  max-width: 330px;
`;

const HeaderDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const LogoImg = styled.img`
  width: 72px;
  height: 72px;
  background-color: #fff;
  border: 4px solid #ebebeb;
  border-radius: 50%;
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledNavlink = styled(NavLink)`
  :hover {
    text-decoration: none;
  }

  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 18px;
  text-decoration: none;
`;

const PosloviRSH3 = styled.h3``;
const LinkDiv = styled.div`
  color: #535cb5;
  :hover {
    color: #333da8;
    text-decoration: underline;
  }
`;

const DescriptionDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: end;
`;

const PosloviRS = () => {
  return (
    <PosloviRSDiv>
      <StyledNavlink as="a" href="https://www.poslovi.rs/" target="_blank">
        <HeaderDiv>
          <LogoImg alt="POSLOVI.RS" src={PosloviRsSrc} />
          <NameDiv>
            <PosloviRSH3>POSLOVI.RS</PosloviRSH3>
            <LinkDiv>poslovi.rs</LinkDiv>
            <br />
            <DescriptionDiv>
              Tražite posao? Portal poslovi.rs je pravo mesto za Vas!
            </DescriptionDiv>
          </NameDiv>
        </HeaderDiv>
      </StyledNavlink>
    </PosloviRSDiv>
  );
};

export default PosloviRS;
