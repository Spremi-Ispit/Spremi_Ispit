import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Container, ControllsContainer, StyledTextField } from './styles';
import Loader from '../../../../components/loader';
import ErrorDialog from '../../../../components/errorDialogRedux';
import { setError } from './redux/slices';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadUsernamesWithRoles,
  updateUserRole,
} from '../../reduxThunk/actions';
import { userRole } from '../../../../utils/enums';
import { useNavigate } from 'react-router-dom';
import { profileRoute } from '../../../../app/router/routes';
import { mapUserRoleToView } from '../usersTable';

export const UserForm = () => {
  const [role, setRole] = useState('');
  const { error, loading, allUsers } = useSelector(
    (state) => state.users.userForm
  );
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUsernamesWithRoles());
  }, [dispatch]);

  useEffect(() => {
    if (selectedUser) {
      setRole(selectedUser.role);
    } else {
      setRole('');
    }
  }, [dispatch, selectedUser]);

  const handleOnChange = (event, value) => {
    if (value) {
      setSelectedUser(value);
    } else {
      setSelectedUser(null);
    }
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(updateUserRole(selectedUser.email, role));
  };

  const viewToRender = (
    <Container>
      <Autocomplete
        fullWidth
        value={selectedUser}
        onChange={handleOnChange}
        options={allUsers}
        getOptionLabel={(option) =>
          option.length === 0 ? '' : option.username
        }
        style={{ marginTop: '20px', marginBottom: '10px' }}
        renderInput={(params) => (
          <TextField {...params} label="Korisničko ime" variant="outlined" />
        )}
      />
      <StyledTextField
        label="Stara rola"
        disabled
        InputProps={{
          readOnly: true,
        }}
        value={selectedUser ? mapUserRoleToView(selectedUser.role) : ''}
        fullWidth
      />
      <FormControl variant="outlined" fullWidth disabled={!selectedUser}>
        <InputLabel>Nova rola</InputLabel>
        <Select
          value={selectedUser ? role : ''}
          onChange={handleRoleChange}
          label="Nova rola"
        >
          <MenuItem value={userRole.visitor}>
            {mapUserRoleToView(userRole.visitor)}
          </MenuItem>
          <MenuItem value={userRole.moderator}>
            {mapUserRoleToView(userRole.moderator)}
          </MenuItem>
          <MenuItem value={userRole.admin}>
            {mapUserRoleToView(userRole.admin)}
          </MenuItem>
        </Select>
      </FormControl>
      <ControllsContainer>
        <Button variant="outlined" onClick={() => navigate(profileRoute)}>
          Odustani
        </Button>
        <Button
          variant="outlined"
          disabled={!selectedUser || selectedUser.role === role}
          onClick={handleSubmit}
        >
          Potvrdi
        </Button>
      </ControllsContainer>
    </Container>
  );

  return error ? (
    <ErrorDialog error={error} setError={setError} />
  ) : loading ? (
    <Loader />
  ) : (
    viewToRender
  );
};

export default UserForm;
