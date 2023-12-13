import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ErrorDialog from '../../../../../../../components/dialogs/ErrorDialog';
import Loader from '../../../../../../../components/Loader';
import { useAuthManager } from '../../../../../../../utils/managers/AuthManager';
import { useApiActions } from '../../../../../../../api/useApiActions';
import colors from '../../../../../../../theme/colors';
import Button from '../../../../../../../components/buttons/Button';

const StyledFormControl = styled(FormControl)`
  && {
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: white;
  }
`;

const SubmitButton = styled(Button)`
  color: black;
  background-color: ${colors.footer};
  font-size: medium;
  font-weight: bold;

  :hover {
    color: white;
    background-color: ${colors.filteri};
  }
`;
const PasswordUpdateView = ({ user, setPasswordUpdate }) => {
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const { changeAccountPassword } = useApiActions();
  const { error, loading, setError, loaded, action, response } =
    changeAccountPassword;
  const [showPassword, setShowPassword] = useState(false);
  const authManager = useAuthManager();

  useEffect(() => {
    if (loaded) {
      authManager.updateToken(response);
      setPasswordUpdate(false);
    }
  }, [loaded]);

  const handleSubmitPasswordUpdate = () => {
    action(newPassword, confirmedPassword, user.email);
  };

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  if (loading) {
    return <Loader />;
  }

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
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
          label="Nova šifra"
        />
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
          onChange={(e) => setConfirmedPassword(e.target.value)}
          label="Potvrdi trenutnom šifrom"
        />
      </StyledFormControl>
      <SubmitButton onClick={handleSubmitPasswordUpdate}>Potvrdi</SubmitButton>
    </>
  );
};

export default PasswordUpdateView;
