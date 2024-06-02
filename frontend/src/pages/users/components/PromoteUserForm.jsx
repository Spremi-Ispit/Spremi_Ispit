import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Error from '../../../components/dialogs/Error';
import Loader from '../../../components/Loader';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { mapUserRoleToView } from './UsersTable';
import { userRole } from '../../../redux/app/state';
import { selectLoadPromoteUserForm } from '../../../redux/users/selectors';
import { useSelector } from 'react-redux';
import { homeRoute } from '../../../router/routes';
import Button from '../../../components/buttons/Button';
import { useFetch } from '../../../api/useFetch';
import { updateUserRole } from '../../../api/actions/user/updateUserRole';
import { loadUsernamesWithRoles } from '../../../api/actions/user/loadUsernamesWithRoles';
import { usersActions } from '../../../redux/users/slice';
import { useRedux } from '../../../redux/useRedux';

const Container = styled.div``;

const ControllsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
`;

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 10px;
  }
`;

export const PromoteUserForm = () => {
  const [role, setRole] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  const loadPromoteUserForm = useSelector(selectLoadPromoteUserForm);

  const setLoadPromoteUserForm = useRedux(usersActions.setLoadPromoteUserForm);
  const setLoadUsersTable = useRedux(usersActions.setLoadUsersTable);

  const {
    error: errorUpdateUserRole,
    loading: loadingUpdateUserRole,
    loaded: loadedUpdateUserRole,
    fetch: actionUpdateUserRole,
  } = useFetch(updateUserRole);

  const {
    error: errorUsernamesWithRoles,
    loaded: loadedUsernamesWithRoles,
    fetch: actionLoadUsernamesWithRoles,
    data: responseUsernamesWithRoles,
  } = useFetch(loadUsernamesWithRoles);

  useEffect(() => {
    if (selectedUser) {
      setRole(selectedUser.role);
    } else {
      setRole('');
    }
  }, [selectedUser]);

  const handleOnChange = (event, value) => {
    if (value) {
      setSelectedUser(value);
    } else {
      setSelectedUser(null);
    }
  };

  useEffect(() => {
    if (!loadPromoteUserForm) {
      setLoadPromoteUserForm(true);
    }
  }, []);

  useEffect(() => {
    if (loadPromoteUserForm) {
      actionLoadUsernamesWithRoles();
    }
  }, [loadPromoteUserForm]);

  useEffect(() => {
    if (loadedUpdateUserRole) {
      setLoadPromoteUserForm(true);
      setLoadUsersTable(true);
    }
  }, [loadedUpdateUserRole]);

  useEffect(() => {
    if (loadedUsernamesWithRoles) {
      setAllUsers(responseUsernamesWithRoles);
      setLoadPromoteUserForm(false);
      setSelectedUser(null);
    }
  }, [loadedUsernamesWithRoles]);

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = () => {
    actionUpdateUserRole(selectedUser.email, role);
  };

  if (errorUpdateUserRole) {
    return <Error error={errorUpdateUserRole} />;
  }

  if (errorUsernamesWithRoles) {
    return <Error error={errorUsernamesWithRoles} />;
  }

  if (!loadedUsernamesWithRoles || loadingUpdateUserRole) {
    return <Loader />;
  }

  return (
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
        <Button onClick={() => navigate(homeRoute)}>Odustani</Button>
        <Button
          disabled={!selectedUser || selectedUser.role === role}
          onClick={handleSubmit}
        >
          Potvrdi
        </Button>
      </ControllsContainer>
    </Container>
  );
};

export default PromoteUserForm;
