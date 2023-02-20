import React from 'react';
import Navbar from '../../components/navbar';
import Form from './components/form';
import { useSelector } from 'react-redux';
import { Container, ContentContainer, PageHeading } from './styles';
import { setError } from './redux/slices';
import ErrorDialog from '../../components/errorDialogRedux';
import Breadcrumbs from '../../components/breadcrumbs';

const CreatePost = () => {
  const { error } = useSelector((state) => state.createPost);

  const viewToRender = (
    <>
      <Navbar />
      <Breadcrumbs />
      <Container>
        <ContentContainer>
          <PageHeading variant="h5">Kreiranje objave</PageHeading>
          <Form />
        </ContentContainer>
      </Container>
    </>
  );

  if (error) return <ErrorDialog error={error} setError={setError} />;
  else return viewToRender;
};

export default CreatePost;
