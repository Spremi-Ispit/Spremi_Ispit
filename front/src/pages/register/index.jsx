import React from 'react';
import Navbar from '../../components/navbar';
import Quote from './components/quote';
import Form from './components/form';
import Logo from './components/logo';
import Footer from '../../components/footer';
import { useSelector } from 'react-redux';
import { setError } from './redux/slices';
import ErrorDialog from '../../components/errorDialogRedux';
import Loader from '../../components/loader';
import { ContentContainer, MotivationContainer } from './styles';
// import AdditionalRegister from './components/additionalRegister';

const Register = () => {
  const { error, loading } = useSelector((state) => state.register);

  const viewToRender = (
    <>
      <Navbar />
      <ContentContainer>
        <MotivationContainer>
          <Logo />
          <Quote />
        </MotivationContainer>
        <Form />
        {loading ? <Loader /> : null}
        {/* <AdditionalRegister /> */}
      </ContentContainer>
      <Footer />
    </>
  );

  if (error) return <ErrorDialog error={error} setError={setError} />;
  else return viewToRender;
};

export default Register;
