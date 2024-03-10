import React from 'react';
import styled from 'styled-components';
import PosloviRS from './components/PosloviRS/PosloviRS';

const JobAdvertisementDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledH1 = styled.h1`
  text-align: center;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  z-index: 2;
  width: 100%;
  gap: 20px;
`;

const MoreJobs = () => {
  return (
    <JobAdvertisementDiv>
      <StyledH1>Pogledaj još oglasa!</StyledH1>
      <MainDiv>
        <PosloviRS />
      </MainDiv>
    </JobAdvertisementDiv>
  );
};

export default MoreJobs;
