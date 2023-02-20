import React from 'react';
import Google from './components/google';
import Outlook from './components/outlook';
import { AdditionalRegisterContainer } from './styles';

const AdditionalRegister = () => {
  return (
    <AdditionalRegisterContainer>
      <Google />
      <Outlook />
    </AdditionalRegisterContainer>
  );
};

export default AdditionalRegister;
