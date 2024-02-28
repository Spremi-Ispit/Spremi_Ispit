import React, { useState } from 'react';
import styled from 'styled-components';
import { Deavensoft } from './Partners/Deavensoft/Deavensoft';
import { InfinitoMedia } from './Partners/InfinitoMedia/InfinitoMedia';
import { WebNi } from './Partners/WebNi/WebNi';
import { Nignite } from './Partners/Nignite/Nignite';
import { SyncitGroup } from './Partners/SyncitGroup/SyncitGroup';
import { Codemancy } from './Partners/Codemancy/Codemancy';
import { Ingsoftware } from './Partners/Ingsoftware/Ingsoftware';
import { ITLabs } from './Partners/ITLabs/ITLabs';
import { AccordiaGroup } from './Partners/AccordiaGroup/AccordiaGroup';
import { JoomBooz } from './Partners/JoomBooz/JoomBooz';
import { Softelm } from './Partners/Softelm/Softelm';
import { Poslovi } from './Partners/Poslovi.rs/Poslovi';

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

const companyList = () => {
  const companies = [
    <Nignite />,
    <Deavensoft />,
    <InfinitoMedia />,
    <WebNi />,
    <SyncitGroup />,
    <Codemancy />,
    <Ingsoftware />,
    <ITLabs />,
    <AccordiaGroup />,
    <JoomBooz />,
    <Softelm />,
    // <Poslovi />,
  ];
  const shuffledCompanies = [];

  const n = companies.length;
  for (let i = 0; i < n; i++) {
    const index = Math.floor((Math.random() * 100) % companies.length);

    shuffledCompanies.push(
      React.cloneElement(...companies.splice(index, 1), { key: i })
    );
  }

  return shuffledCompanies;
};

const Companies = () => {
  const [list] = useState(companyList());

  return (
    <>
      <CompaniesHeader>IT kompanije</CompaniesHeader>
      <CompaniesDiv>{list}</CompaniesDiv>
    </>
  );
};

export default Companies;
