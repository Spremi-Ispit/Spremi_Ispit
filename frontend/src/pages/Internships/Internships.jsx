import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
import Footer from '../../components/Footer';
import SpremiIspit from './SpremiIspit/SpremiIspit';
import Logo from '../../assets/Logo.jpg';
import PosloviRS from './PosloviRS/PosloviRS';
import ITLabs from './ITLabs/ITLabs';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 2;
  width: 100%;
  gap: 20px;
`;

const InternshipsDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* ::before {
    content: '';
    background-image: url(${Logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: 1;
  } */
`;

const StyledH1 = styled.h1`
  text-align: center;
`;

const JobAdvertisementDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Internships = () => {
  return (
    <>
      <Navbar />
      <SettingsSidePanel />
      <InternshipsDiv>
        <StyledH1>Studentske prakse</StyledH1>
        <MainDiv>
          <SpremiIspit />
          <ITLabs />
        </MainDiv>
      </InternshipsDiv>
      <JobAdvertisementDiv>
        <StyledH1>Pogledaj još oglasa!</StyledH1>
        <MainDiv>
          <PosloviRS />
        </MainDiv>
      </JobAdvertisementDiv>
      <Footer />
    </>
  );
};

export default Internships;
