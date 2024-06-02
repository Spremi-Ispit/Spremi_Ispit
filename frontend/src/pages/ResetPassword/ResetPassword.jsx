import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import TextField from '@mui/material/TextField';
import Button from '../../components/buttons/Button';
import { useNavigate } from 'react-router-dom';
import { homeRoute } from '../../router/routes';
import Loader from '../../components/Loader';
import Error from '../../components/dialogs/Error';
import { useFetch } from '../../api/useFetch';
import { resetPasswordConfirm } from '../../api/actions/user/resetPasswordConfirm';

const ResetPasswordDiv = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResetPasswordH1 = styled.h1`
  margin: 20px;
`;

const FormDiv = styled.div`
  width: 90%;
  max-width: 500px;
`;

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 20px;
  }
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ResetPassword = () => {
  const [resetCode, setResetCode] = useState('');
  const [newPass, setNewPass] = useState('');
  const navigate = useNavigate();
  const { loading, data, error, fetch } = useFetch(resetPasswordConfirm);

  useEffect(() => {
    if (data) {
      alert(data);
      navigate(-1);
    }
  }, [data, navigate]);

  const handleResetCodeChange = (event) => {
    const value = event.target.value;
    setResetCode(value);
  };

  const handleNewPasswordChange = (event) => {
    const value = event.target.value;
    setNewPass(value);
  };

  const handleCancle = () => {
    navigate(homeRoute);
  };

  const handleSubmit = () => {
    fetch(resetCode, newPass);
  };

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <ResetPasswordDiv>
        <ResetPasswordH1>Promena sifre</ResetPasswordH1>
        <FormDiv>
          <StyledTextField
            label="Kod za reset"
            variant="outlined"
            fullWidth
            onChange={handleResetCodeChange}
          />
          <StyledTextField
            label="Nova sifra"
            variant="outlined"
            fullWidth
            onChange={handleNewPasswordChange}
          />
          <ButtonsDiv>
            <Button onClick={handleCancle}>Odustani</Button>
            <Button onClick={handleSubmit} disabled={!resetCode || !newPass}>
              Potvrdi
            </Button>
          </ButtonsDiv>
        </FormDiv>
      </ResetPasswordDiv>
    </>
  );
};

export default ResetPassword;
