import React from 'react';
import styled from 'styled-components';
import { Deavensoft } from './Partners/Deavensoft/Deavensoft';
import { InfinitoMedia } from './Partners/InfinitoMedia/InfinitoMedia';
import { Codemancy } from './Partners/Codemancy/Codemancy';

const CompaniesDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const CompaniesHeader = styled.h3`
  text-align: center;
`;

const Companies = () => {
  return (
    <>
      <CompaniesHeader>Kompanije koje podržavaju projekat</CompaniesHeader>
      <CompaniesDiv>
        <Codemancy />
        <Deavensoft />
        <InfinitoMedia />
      </CompaniesDiv>
    </>
  );
};

export default Companies;
