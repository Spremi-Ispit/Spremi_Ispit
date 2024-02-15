import React from 'react';
import styled from 'styled-components';
import { Deavensoft } from './Partners/Deavensoft/Deavensoft';
import { InfinitoMedia } from './Partners/InfinitoMedia/InfinitoMedia';
import { WebNi } from './Partners/WebNi/WebNi';
import { Nignite } from './Partners/Nignite/Nignite';
// import { Codemancy } from './Partners/Codemancy/Codemancy';

const CompaniesDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CompaniesHeader = styled.h3`
  text-align: center;
`;

const Companies = () => {
  return (
    <>
      <CompaniesHeader>Kompanije koje podržavaju projekat</CompaniesHeader>
      <CompaniesDiv>
        {/* <Codemancy /> */}
        <Nignite />
        <Deavensoft />
        <InfinitoMedia />
        <WebNi />
      </CompaniesDiv>
    </>
  );
};

export default Companies;
