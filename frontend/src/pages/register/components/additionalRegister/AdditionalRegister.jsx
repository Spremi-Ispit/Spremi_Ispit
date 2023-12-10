import React from 'react';
import Google from './components/Goole';
import Outlook from './components/Outlook';
import styled from 'styled-components';

const AdditionalRegisterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AdditionalRegister = () => {
  return (
    <AdditionalRegisterContainer>
      <Google />
      <Outlook />
    </AdditionalRegisterContainer>
  );
};

export default AdditionalRegister;
