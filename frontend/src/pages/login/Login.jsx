import React from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Footer from '../../components/Footer';
import Navbar from '../../components/navbar/Navbar';
import Motivation from './components/Motivation';
// import AdditionalLogin from './components/additionalLogin/AdditionalLogin';

export const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Login = () => {
  return (
    <>
      <Navbar />
      <ContentContainer>
        <Form />
        <Motivation />
        {/* <AdditionalLogin /> */}
      </ContentContainer>
      <Footer />
    </>
  );
};

export default Login;
