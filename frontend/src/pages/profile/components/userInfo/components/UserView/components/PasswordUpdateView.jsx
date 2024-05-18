import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Error from '../../../../../../../components/dialogs/Error';
import Loader from '../../../../../../../components/Loader';
import { useAuthManager } from '../../../../../../../utils/managers/AuthManager';
import { useApiActions } from '../../../../../../../api/useApiActions';
import colors from '../../../../../../../theme/colors';
import Button from '../../../../../../../components/buttons/Button';
import { validatePassword } from '../../../../../../../utils/validation';
import Dialog from '../../../../../../../components/dialogs/Dialog';

const StyledFormControl = styled(FormControl)`
  && {
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: white;
  }
`;

const SubmitButton = styled(Button)`
  color: white;
  background-color: ${colors.filteri};
  font-size: medium;
  font-weight: bold;

  :hover {
    color: black;
    background-color: ${colors.button};
  }
`;
const PasswordUpdateView = ({ user, setPasswordUpdate }) => {
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const { changeAccountPassword } = useApiActions();
  const { error, loading, loaded, action, response } = changeAccountPassword;
  const [showPassword, setShowPassword] = useState(false);
  const authManager = useAuthManager();
  const [message, setMessage] = useState('');
  const [newPasswordError, setNewPasswordError] = useState(null);
  const [confirmedPasswordError, setConfirmedPasswordError] = useState(null);

  useEffect(() => {
    if (loaded) {
      authManager.updateToken(response);
      setPasswordUpdate(false);
    }
  }, [loaded]);

  const handleSubmitPasswordUpdate = async () => {
    const newPasswordError = await validatePassword(newPassword);
    if (newPasswordError) {
      return setMessage('Nova sifra: ' + newPasswordError);
    }

    const confirmedPasswordError = await validatePassword(confirmedPassword);
    if (confirmedPasswordError) {
      return setMessage('Potvrdi trenutnom sifrom: ' + confirmedPasswordError);
    }

    action(newPassword, confirmedPassword, user.email);
  };

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  const handleNewPasswordChange = async (e) => {
    const newPassword = e.target.value;
    setNewPassword(newPassword);

    const passwordError = await validatePassword(newPassword);
    setNewPasswordError(passwordError);
  };

  const handleConfirmedPasswordChange = async (e) => {
    const confirmedPassword = e.target.value;
    setConfirmedPassword(confirmedPassword);

    const passwordError = await validatePassword(confirmedPassword);
    setConfirmedPasswordError(passwordError);
  };

  return (
    <>
      <h2>Promeni šifru</h2>
      <StyledFormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Nova šifra
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((show) => !show)}
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                edge="end"
              >
                <VisibilityOff />
              </IconButton>
            </InputAdornment>
          }
          onChange={handleNewPasswordChange}
          value={newPassword}
          label="Nova šifra"
          error={!!newPasswordError}
        />
        {!!newPasswordError && (
          <FormHelperText error>{newPasswordError}</FormHelperText>
        )}
      </StyledFormControl>
      <StyledFormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Potvrdi trenutnom šifrom
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((show) => !show)}
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                edge="end"
              >
                <VisibilityOff />
              </IconButton>
            </InputAdornment>
          }
          onChange={handleConfirmedPasswordChange}
          label="Potvrdi trenutnom šifrom"
          error={!!confirmedPasswordError}
        />
        {!!confirmedPasswordError && (
          <FormHelperText error>{confirmedPasswordError}</FormHelperText>
        )}
      </StyledFormControl>
      <SubmitButton onClick={handleSubmitPasswordUpdate}>Potvrdi</SubmitButton>
      <Dialog message={message} setMessage={setMessage} />
    </>
  );
};

export default PasswordUpdateView;
