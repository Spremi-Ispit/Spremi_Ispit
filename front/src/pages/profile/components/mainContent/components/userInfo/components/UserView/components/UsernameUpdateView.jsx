import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Button, TextField } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ErrorDialog from '../../../../../../../../../components/dialogs/ErrorDialog';
import Loader from '../../../../../../../../../components/loader';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../../../../../utils/managers/UrlManager';
import { useAuthManager } from '../../../../../../../../../utils/managers/AuthManager';
import { useApiActions } from '../../../../../../../../../api/useApiActions';

const StyledFormControl = styled(FormControl)`
  && {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 10px;
  }
`;

const UsernameUpdateView = ({ user, setUsernameUpdate }) => {
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const { changeAccountUsername } = useApiActions();
  const { loaded, loading, error, setError, action } = changeAccountUsername;
  const [showPassword, setShowPassword] = useState(false);
  const urlManager = useUrlManager();
  const authManager = useAuthManager();

  useEffect(() => {
    if (loaded) {
      authManager.updateUsernameAndToken(user);
      urlManager.updateUrlParam(allowedUrlParams.username, user.username);
      setUsernameUpdate(false);
    }
  }, [loaded]);

  const handleSubmitUsernameUpdate = () => {
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
      <StyledButton variant="outlined" onClick={handleSubmitUsernameUpdate}>
        Potvrdi
      </StyledButton>
    </>
  );
};

export default UsernameUpdateView;
