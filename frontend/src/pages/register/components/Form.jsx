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
import { homeRoute } from '../../../router/routes';
import {
  validateEmail,
  //validatePassword
} from '../../../utils/validation';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { selectToken } from '../../../redux/app/selectors';
import { useAuthManager } from '../../../utils/managers/AuthManager';
import { screensCSS } from '../../../utils/useScreens';
import Button from '../../../components/buttons/Button';
import { useApiActions } from '../../../api/useApiActions';

const StyledButton = styled(Button)`
  && {
    margin: 10px;
  }
`;

const StyledForm = styled.form`
  text-align: center;
  width: 50%;
  margin-top: 100px;

  @media ${screensCSS.tablet} {
    margin-top: 20px;
    width: 90%;
  }
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin-bottom: 30px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  border: 0.5px solid;
  background-color: #cccccc;
  align-items: center;
  width: 100%;
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
  const authManager = useAuthManager();

  useEffect(() => {
    if (token !== null) {
      navigate(homeRoute);
    }
  }, [token, navigate]);

  const handleRegister = () => {
    // if (validatePassword(password) === null) {
    //   setDialogMessage(
    //     `Password must contain minimum eight characters, at least one letter and one number:`
    //   );
    // } else

    if (password !== passwordConfirm) {
      setDialogMessage(`Passwords don't match`);
    } else if (validateEmail(email) === null) {
      setDialogMessage('Mail is not valid');
    } else {
      action(email, password);
    }
  };

  useEffect(() => {
    if (response) {
      authManager.login(response);
    }
  }, [response]);

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  return (
    <>
      <StyledForm>
        <Typography variant="h4">Registracija</Typography>
        <StyledPaper elevation={0}>
          <TextField
            placeholder="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="Email"
          />
          <TextField
            placeholder="Šifra"
            type="password"
            autoComplete="current-password"
            margin="normal"
            fullWidth
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            placeholder="Potvrdi šifru"
            margin="normal"
            type="password"
            fullWidth
            variant="outlined"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            autoComplete="current-password"
          />

          <StyledButton
            fullWidth
            variant="outlined"
            size="large"
            onClick={handleRegister}
            disabled={loading}
          >
            Registruj me
          </StyledButton>
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
