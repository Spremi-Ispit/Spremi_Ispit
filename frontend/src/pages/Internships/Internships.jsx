import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
import Footer from '../../components/Footer';
import Card from './components/Card';
import Logo from '../../assets/Logo.jpg';
import PosloviRS from './PosloviRS/PosloviRS';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 2;
`;

const InternshipsDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

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
        <h1>Studentske prakse</h1>
        <MainDiv>
          <Card />
        </MainDiv>
      </InternshipsDiv>
      <JobAdvertisementDiv>
        <h1>Pogledaj još oglasa!</h1>
        <MainDiv>
          <PosloviRS />
        </MainDiv>
      </JobAdvertisementDiv>
      <Footer />
    </>
  );
};

export default Internships;
