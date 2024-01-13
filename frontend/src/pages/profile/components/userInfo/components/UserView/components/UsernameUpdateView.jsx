import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { TextField } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ErrorDialog from '../../../../../../../components/dialogs/ErrorDialog';
import Loader from '../../../../../../../components/Loader';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../../../utils/managers/UrlManager';
import { useAuthManager } from '../../../../../../../utils/managers/AuthManager';
import { useApiActions } from '../../../../../../../api/useApiActions';
import Button from '../../../../../../../components/buttons/Button';
import colors from '../../../../../../../theme/colors';
import { validatePassword } from '../../../../../../../utils/validation';
import Dialog from '../../../../../../../components/dialogs/Dialog';

const StyledFormControl = styled(FormControl)`
  && {
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: white;
  }
`;

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 10px;
    margin-top: 10px;
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

const UsernameUpdateView = ({ user, setUsernameUpdate }) => {
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const { changeAccountUsername } = useApiActions();
  const { response, loading, error, setError, action } = changeAccountUsername;
  const [showPassword, setShowPassword] = useState(false);
  const urlManager = useUrlManager();
  const authManager = useAuthManager();
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (response) {
      urlManager.updateUrlParam(allowedUrlParams.username, response.username);
      authManager.updateUsernameAndToken(response);
      setUsernameUpdate(false);
    }
  }, [response]);

  const handleSubmitUsernameUpdate = async () => {
    const passwordConfirmError = await validatePassword(confirmedPassword);
    if (passwordConfirmError) {
      return setMessage(passwordConfirmError);
    }

    if (!newUsername.trim()) {
      return setMessage('Username could not be empty');
    }

    action(newUsername, confirmedPassword, user.email);
  };

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h2>Promeni korisničko ime</h2>
      <StyledTextField
        label="Novo korisničko ime"
        variant="outlined"
        onChange={(e) => setNewUsername(e.target.value)}
        value={newUsername}
      />
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
          onChange={(e) => setConfirmedPassword(e.target.value)}
          label="Potvrdi trenutnom šifrom"
        />
      </StyledFormControl>
      <SubmitButton onClick={handleSubmitUsernameUpdate}>Potvrdi</SubmitButton>
      <Dialog message={message} setMessage={setMessage} />
    </>
  );
};

export default UsernameUpdateView;
