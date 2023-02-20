import React from 'react';
import Navbar from '../../components/navbar';
import DeleteTag from './components/deleteTag';
import AddTag from './components/addTag';
import { useSelector } from 'react-redux';
import { setError } from './redux/slices';
import ErrorDialog from '../../components/errorDialogRedux';
import Loader from '../../components/loader';
import { Container, Content, LoaderContainer } from './styles';
import Footer from '../../components/footer';
import Breadcrumbs from '../../components/breadcrumbs';

const Tags = () => {
  const error = useSelector((state) => state.tags.error);
  const loading = useSelector((state) => state.tags.loading);

  const viewToRender = (
    <>
      <Navbar />
      <Breadcrumbs />
      <Container>
        <Content>
          <AddTag />
          <DeleteTag />
        </Content>
        <LoaderContainer>{loading ? <Loader /> : null}</LoaderContainer>
      </Container>
      <Footer />
    </>
  );

  if (error) return <ErrorDialog error={error} setError={setError} />;
  else return viewToRender;
};

export default Tags;
