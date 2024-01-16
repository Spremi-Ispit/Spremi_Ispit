import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Navbar from '../../components/navbar/Navbar';
import Form from './components/form/Form';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const PageHeading = styled(Typography)`
  && {
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;

export const CreatePost = () => {
  return (
    <>
      <Navbar />
      <SettingsSidePanel />
      <Container>
        <ContentContainer>
          <PageHeading variant="h5">Kreiranje objave</PageHeading>
          <Form />
        </ContentContainer>
      </Container>
    </>
  );
};

export default CreatePost;
