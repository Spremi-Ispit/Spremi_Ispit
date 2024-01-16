import React from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Footer from '../../components/Footer';
import Navbar from '../../components/navbar/Navbar';
import Motivation from './components/Motivation';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
// import AdditionalRegister from './components/additionalRegister/AdditionalRegister';

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Register = () => {
  return (
    <>
      <Navbar />
      <SettingsSidePanel />
      <ContentContainer>
        <Form />
        <Motivation />
        {/* <AdditionalRegister /> */}
      </ContentContainer>
      <Footer />
    </>
  );
};

export default Register;
