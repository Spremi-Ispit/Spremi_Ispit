import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ErrorDialog from '../../../components/dialogs/ErrorDialog';
import Loader from '../../../components/Loader';
import {
  homeRoute,
  loginRoute,
  registrationConfirmRoute,
} from '../../../router/routes';
import { validateEmail, validatePassword } from '../../../utils/validation';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { selectToken } from '../../../redux/app/selectors';
import { screensCSS } from '../../../utils/useScreens';
import Button from '../../../components/buttons/Button';
import { useApiActions } from '../../../api/useApiActions';
import ReCAPTCHA from 'react-google-recaptcha';
import { NavLink } from 'react-router-dom';
import { FormLabel } from '@mui/material';

const TextH4 = styled(Typography)`
  && {
    font-family: Poppins;
    font-weight: 600;
    font-size: 40px;
    font-style: italic;
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

const StyledNavLink = styled(NavLink)`
  color: black;
  margin-left: 2px;

  :hover {
    text-decoration: underline;
  }
`;

const RedirectToLoginDiv = styled.div`
  margin-top: 5px;
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

const DivWrapper = styled.div`
  position: relative;
  width: 80%;
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

export const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');
  const { register } = useApiActions();
  const { loading, error, setError, response, action } = register;
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const [recaptcha, setReacaptcha] = useState(false);

  useEffect(() => {
    if (token !== null) {
      navigate(homeRoute);
    }
  }, [token, navigate]);

  const handleRegister = async () => {
    if (recaptcha === false) {
      return setDialogMessage('Robot? o.O');
    }
    const emailError = await validateEmail(email);
    if (emailError) {
      return setDialogMessage(emailError);
    }

    if (password !== passwordConfirm) {
      return setDialogMessage('Sifre nisu iste');
    }

    const passwordError = await validatePassword(password);
    if (passwordError) {
      return setDialogMessage(passwordError);
    }

    const passwordConfirmError = await validatePassword(passwordConfirm);
    if (passwordConfirmError) {
      return setDialogMessage('passwordConfirm: ' + passwordConfirmError);
    }

    action(email, password);
  };

  useEffect(() => {
    if (response) {
      alert(response);
      navigate(registrationConfirmRoute);
    }
  }, [response]);

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  const onChangeRecaptcha = () => {
    setReacaptcha(true);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleRegister();
    }
  };
  return (
    <>
      <StyledForm onKeyDown={handleEnter}>
        <TextH4 variant="h4">Registracija</TextH4>
        <StyledPaper elevation={0}>
          <DivWrapper>
            <StyledLbl>Email</StyledLbl>
            <TextField
              placeholder="Email"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="Email"
            />
          </DivWrapper>
          <DivWrapper>
            <StyledLbl>Šifra</StyledLbl>
            <TextField
              placeholder="Šifra"
              type="password"
              autoComplete="current-password"
              margin="normal"
              fullWidth
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
          </DivWrapper>
          <DivWrapper>
            <TextField
              placeholder="Potvrdi šifru"
              margin="normal"
              type="password"
              fullWidth
              variant="outlined"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              autoComplete="current-password"
            />
          </DivWrapper>
          <ReCAPTCHA
            onChange={onChangeRecaptcha}
            sitekey="6LfQPBwpAAAAABBHiyViwEfJ6YJNw1_S5jcPXiBb"
          />
          <StyledButton onClick={handleRegister} disabled={loading}>
            Registruj me
          </StyledButton>
          <div
            style={{
              width: '100%',
              borderTop: '1px solid #CECECE',
              backgroundColor: '#EFEFEF',
              paddingBottom: '5px',
            }}
          >
            <RedirectToLoginDiv>
              Već imaš profil?
              <StyledNavLink to={`${loginRoute}`}>Prijavi se</StyledNavLink>
            </RedirectToLoginDiv>
          </div>
        </StyledPaper>
      </StyledForm>
      <Dialog open={dialogMessage !== ''} onClose={() => setDialogMessage('')}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ whiteSpace: 'break-spaces' }}>
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => setDialogMessage('')}
            color="primary"
          >
            Zatvori
          </Button>
        </DialogActions>
      </Dialog>
      {loading ? <Loader /> : null}
    </>
  );
};

export default Form;
