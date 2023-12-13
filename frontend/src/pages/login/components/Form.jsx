import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { FormLabel } from '@mui/material';
import Loader from '../../../components/Loader';
import ErrorDialog from '../../../components/dialogs/ErrorDialog';
import { useAuthManager } from '../../../utils/managers/AuthManager';
import { screensCSS } from '../../../utils/useScreens';
import Button from '../../../components/buttons/Button';
import eye from '../../../../src/assets/eye.png';
import eyeOff from '../../../../src/assets/eyeoff.png';
import Modal from './Modal/Modal';
import { useApiActions } from '../../../api/useApiActions';
import { registerRoute } from '../../../router/routes';
import { validateEmail, validatePassword } from '../../../utils/validation';

const TextH4 = styled(Typography)`
  && {
    font-family: Poppins;
    font-weight: 600;
    font-size: 40px;
    font-style: italic;
  }
`;

const DivWrapper = styled.div`
  position: relative;
  width: 80%;
`;

const StyledButton = styled(Button)`
  && {
    margin: 10px;
    font-family: Poppins;
    font-weight: 600;
    font-size: 18px;
    width: 80%;
  }
`;

const StyledForm = styled.form`
  text-align: center;
  width: 40%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media ${screensCSS.tablet} {
    margin-top: 20px;
    width: 90%;
  }
`;

const StyledPaper = styled(Paper)`
  && {
    padding: 20px;
    margin-bottom: 30px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: none;
    box-shadow: -1px 2px 9px 1px #b9b9b9;
  }
`;

const ForgotPasswordDiv = styled.div`
  margin-top: 10px;
  text-decoration: none;
  font-family: Poppins;
  font-weight: 600;
  font-size: 20px;
  color: #000000;

  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const StyledLbl = styled(FormLabel)`
  && {
    display: flex;
    flex-direction: row;
    margin-right: auto;
    font-family: Poppins;
    font-weight: 600;
    font-size: 18px;
    color: black;
  }
`;

const InputField = styled(TextField)`
  && {
    margin: 0;
    padding: 0.8em 0em;
  }
`;

const Span = styled.span`
  position: absolute;
  bottom: 20%;
  left: 90%;
`;

const RedirectToRegisterDiv = styled.div`
  margin-top: 5px;
`;

const StyledNavlink = styled(NavLink)`
  margin-left: 5px;
`;

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useApiActions();
  const { loading, error, setError, response, action } = login;
  const authManager = useAuthManager();
  const [modalOpen, setModalOpen] = useState(false);

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  useEffect(() => {
    if (response) {
      authManager.login(response);
      navigate(-1);
    }
  }, [response]);

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const isFormValid = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };

  const handleSubmit = async () => {
    const emailError = await validateEmail(email);
    if (emailError) {
      return setError(emailError);
    }

    const passwordError = await validatePassword(password);
    if (passwordError) {
      return setError(passwordError);
    }

    action(email, password);
  };

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  return (
    <>
      <StyledForm onKeyDown={handleEnter}>
        <TextH4 variant="h4">Prijavljivanje</TextH4>
        <StyledPaper elevation={0}>
          <DivWrapper>
            <StyledLbl>Email</StyledLbl>
            <InputField
              placeholder="Email"
              fullWidth
              type="email"
              margin="normal"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="Email"
            />
          </DivWrapper>
          <DivWrapper>
            <StyledLbl>Šifra</StyledLbl>
            <InputField
              placeholder="Šifra"
              type={type}
              value={password}
              margin="normal"
              fullWidth
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Span onClick={handleToggle}>
              <img src={icon} />
            </Span>
          </DivWrapper>
          <StyledButton
            onClick={handleSubmit}
            disabled={loading || !isFormValid()}
          >
            Prijavi me
          </StyledButton>
          <ForgotPasswordDiv
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Zaboravio si sifru?
          </ForgotPasswordDiv>
          <RedirectToRegisterDiv>
            Nemaš profil?
            <StyledNavlink to={`${registerRoute}`}>Registruj se</StyledNavlink>
          </RedirectToRegisterDiv>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </StyledPaper>
      </StyledForm>
      {loading ? <Loader /> : null}
    </>
  );
};

export default Form;
