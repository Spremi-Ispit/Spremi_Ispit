import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/buttons/Button';
import { useNavigate } from 'react-router-dom';
import { homeRoute } from '../../router/routes';
import { useApiActions } from '../../api/useApiActions';
import Loader from '../../components/Loader';
import ErrorDialog from '../../components/dialogs/ErrorDialog';
import { useAuthManager } from '../../utils/managers/AuthManager';

const ActivactionCodeDiv = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ActivactionCodeH1 = styled.h1`
  margin: 20px;
`;

const RegistrationConfirm = () => {
  const navigate = useNavigate();
  const [activactionCode, setActivactionCode] = useState('');
  const { registrationConfirm } = useApiActions();
  const { loading, error, setError, response, action } = registrationConfirm;
  const authManager = useAuthManager();

  useEffect(() => {
    if (response) {
      authManager.login(response);
      navigate(homeRoute);
    }
  }, [response]);

  const handleCancle = () => {
    navigate(homeRoute);
  };

  const handleSubmit = () => {
    action(activactionCode);
  };

  const handleActivactionCodeChange = (event) => {
    const value = event.target.value;
    setActivactionCode(value);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  return (
    <>
      <Navbar />
      <ActivactionCodeDiv>
        <ActivactionCodeH1>Unesite aktivacioni kod</ActivactionCodeH1>
        <FormDiv>
          <StyledTextField
            label="Aktivacioni kod"
            variant="outlined"
            fullWidth
            onChange={handleActivactionCodeChange}
          />
          <ButtonsDiv>
            <Button onClick={handleCancle}>Odustani</Button>
            <Button onClick={handleSubmit} disabled={!activactionCode}>
              Potvrdi
            </Button>
          </ButtonsDiv>
        </FormDiv>
      </ActivactionCodeDiv>
    </>
  );
};

export default RegistrationConfirm;
