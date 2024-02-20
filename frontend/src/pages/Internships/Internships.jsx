import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
import Footer from '../../components/Footer';
import Card from './components/Card';
import Logo from '../../assets/Logo.jpg';

const MainDiv = styled.div`
  flex-grow: 1;
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

  ::before {
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
  }
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
      <Footer />
    </>
  );
};

export default Internships;
