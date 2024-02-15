import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
import Footer from '../../components/Footer';
import Card from './components/Card';

const MainDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const InternshipsDiv = styled.div`
  display: flex;
  flex: 1;
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
      <Footer />
    </>
  );
};

export default Internships;
