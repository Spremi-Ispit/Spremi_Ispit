import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavLink from '../../../components/NavLink';
import logoSrc from './logo.jpg';

const PosloviRSDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  gap: 10px;
  max-width: 330px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);

  :hover {
    box-shadow: rgba(0, 0, 0, 0.75) 0px 1px 3px;
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const LogoImg = styled.img`
  width: 96px;
  height: 96px;
  background-color: #fff;
  border: 4px solid #ebebeb;
  border-radius: 50%;
`;

const NameDiv = styled.div``;

const StyledNavlink = styled(NavLink)`
  color: #535cb5;
  :hover {
    color: #333da8;
    text-decoration: none;
  }

  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 18px;
  text-decoration: none;
`;

const PosloviRSH3 = styled.h3`
  margin-bottom: 20px;
`;

const PosloviRS = () => {
  return (
    <PosloviRSDiv>
      <StyledNavlink as="a" href="https://www.poslovi.rs/" target="_blank">
        <HeaderDiv>
          <LogoImg alt="POSLOVI.RS" src={logoSrc} />
          <NameDiv>
            <PosloviRSH3>POSLOVI.RS</PosloviRSH3>
            {'Tražite posao? Portal poslovi.rs je pravo mesto za Vas!'}
          </NameDiv>
        </HeaderDiv>
      </StyledNavlink>
    </PosloviRSDiv>
  );
};

export default PosloviRS;
