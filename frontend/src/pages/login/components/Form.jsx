import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { FormHelperText, FormLabel } from '@mui/material';
import Loader from '../../../components/Loader';
import Error from '../../../components/dialogs/Error';
import { useAuthManager } from '../../../utils/managers/AuthManager';
import { screensCSS } from '../../../utils/useScreens';
import Button from '../../../components/buttons/Button';
import eye from '../../../../src/assets/eye.png';
import eyeOff from '../../../../src/assets/eyeoff.png';
import Modal from './Modal/Modal';
import { useApiActions } from '../../../api/useApiActions';
import { registerRoute } from '../../../router/routes';
import { validateEmail, validatePassword } from '../../../utils/validation';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';

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
  margin: 10px 0px;
`;

const StyledButton = styled(Button)`
  && {
    margin: 10px;
    font-family: Poppins;
    font-weight: 600;
    font-size: 18px;
    width: 80%;
    margin-bottom: 30px;
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
    padding-top: 20px;
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

const RegistrationDiv = styled.div`
  margin-top: 10px;
  color: #000000;
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
  }
`;

const ForgotPasswordDiv = styled.div`
  margin-top: 5px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  margin-left: 2px;
  text-decoration: none;
  font-family: Poppins;
  font-weight: 600;
  font-size: 18px;

  :hover {
    text-decoration: underline;
  }
`;

const FooterDiv = styled.div`
  width: 100%;
  border-top: 1px solid #cecece;
  background-color: #efefef;
  padding-bottom: 5px;
`;

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useApiActions();
  const { loading, error, response, action } = login;
  const authManager = useAuthManager();
  const [modalOpen, setModalOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  useEffect(() => {
    if (response) {
      authManager.login(response);
      navigate(-1);
    }
  }, [response]);

  const handleLoginEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleLogin();
    }
  };

  const handleLogin = async () => {
    const emailError = await validateEmail(email);
    if (emailError) {
      return alert(emailError);
    }

    const passwordError = await validatePassword(password);
    if (passwordError) {
      return alert(passwordError);
    }

    action(email, password);
  };

  const handleEmailChange = async (e) => {
    const email = e.target.value;
    setEmail(email);

    const emailError = await validateEmail(email);
    setEmailError(emailError);
  };

  const handlePasswordChange = async (e) => {
    const password = e.target.value;
    setPassword(password);

    const passwordError = await validatePassword(password);
    setPasswordError(passwordError);
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <StyledForm onKeyDown={handleLoginEnter}>
        <TextH4 variant="h4">Prijavljivanje</TextH4>
        <StyledPaper elevation={0}>
          <DivWrapper>
            <StyledLbl>Email</StyledLbl>
            <InputField
              placeholder="Email"
              fullWidth
              type="email"
              variant="outlined"
              onChange={handleEmailChange}
              autoComplete="Email"
              error={!!emailError}
            />
            {!!emailError && (
              <FormHelperText error>{emailError}</FormHelperText>
            )}
          </DivWrapper>
          <DivWrapper>
            <StyledLbl>Šifra</StyledLbl>
            <OutlinedInput
              placeholder="Šifra"
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              fullWidth
              variant="outlined"
              onChange={handlePasswordChange}
              autoComplete="current-password"
              endAdornment={
                <img
                  onClick={() => setPasswordVisible((prev) => !prev)}
                  style={{ cursor: 'pointer' }}
                  src={passwordVisible ? eye : eyeOff}
                />
              }
              error={!!passwordError}
            />
            {!!passwordError && (
              <FormHelperText error>{passwordError}</FormHelperText>
            )}
          </DivWrapper>
          <StyledButton onClick={handleLogin} type="button">
            Prijavi me
          </StyledButton>
          <FooterDiv>
            <RegistrationDiv>
              Nemaš profil?
              <StyledNavLink to={registerRoute}>Registruj se</StyledNavLink>
            </RegistrationDiv>
            <ForgotPasswordDiv onClick={() => setModalOpen(true)}>
              Zaboravio si sifru?
            </ForgotPasswordDiv>
          </FooterDiv>

          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </StyledPaper>
      </StyledForm>
      {loading ? <Loader /> : null}
    </>
  );
};

export default Form;
