import React from 'react';
import Google from './components/Goole';
import Outlook from './components/Outlook';
import styled from 'styled-components';

const AdditionalLoginContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AdditionalLogin = () => {
  return (
    <AdditionalLoginContainer>
      <Google />
      <Outlook />
    </AdditionalLoginContainer>
  );
};

export default AdditionalLogin;
