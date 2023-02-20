import React from 'react';
import Google from "./components/google";
import Outlook from "./components/outlook";
import {  AdditionalLoginContainer } from './styles';

const AdditionalLogin = () => {
  return (
    <AdditionalLoginContainer>
      <Google/>
      <Outlook/>
    </AdditionalLoginContainer>
  )

}

export default AdditionalLogin;


