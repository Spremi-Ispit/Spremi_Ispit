import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { register } from '../../reduxThunk/actions';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormContainer,
  FormHeading,
  StyledPaper,
  StyledButton,
} from './styles';
import * as routes from '../../../../app/router/routes';
import {
  validateEmail,
  // validatePassword,
} from '../../../../utils/authValidation';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.app.token);
  const navigate = useNavigate();
  const loading = useSelector((state) => state.register.loading);

  useEffect(() => {
    if (token !== null) {
      navigate(routes.homeRoute);
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
      dispatch(register(email, password));
    }
  };

  return (
    <>
      <FormContainer>
        <FormHeading variant="h4">Registracija</FormHeading>
        <StyledPaper elevation={0}>
          <TextField
            placeholder="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
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
      </FormContainer>
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
    </>
  );
};

export default Form;
