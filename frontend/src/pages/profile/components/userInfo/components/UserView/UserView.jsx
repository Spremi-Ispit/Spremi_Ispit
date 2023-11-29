import React, { useState } from 'react';
import styled from 'styled-components';
import MyTextField from './components/MyTextField';
import { Divider } from '@mui/material';
import PasswordUpdateView from './components/PasswordUpdateView';
import UsernameUpdateView from './components/UsernameUpdateView';
import { screensCSS } from '../../../../../../utils/useScreens';

const StyledDivider = styled(Divider)`
  && {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 730px;
  }
`;

const UserViewDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 600px;

  @media ${screensCSS.tablet} {
    width: auto;
  }
  margin: auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const UserView = ({ user }) => {
  const [usernameUpdate, setUsernameUpdate] = useState(false);
  const [passwordUpdate, setPasswordUpdate] = useState(false);

  const userInfoView = () => (
    <>
      <h2>Informacije</h2>
      <StyledDivider />
      <StyledForm noValidate>
        <MyTextField value={user.email} label="Email" />
        <MyTextField
          value={user.username}
          label="Korisničko ime"
          editable
          onEdit={() => {
            setUsernameUpdate(true);
            setPasswordUpdate(false);
          }}
        />
        <MyTextField
          value="🔒"
          label="Šifra"
          editable
          onEdit={() => {
            setPasswordUpdate(true);
            setUsernameUpdate(false);
          }}
        />
      </StyledForm>
    </>
  );

  const updateView = () => {
    if (usernameUpdate) {
      return (
        <UsernameUpdateView user={user} setUsernameUpdate={setUsernameUpdate} />
      );
    }

    if (passwordUpdate) {
      return (
        <PasswordUpdateView user={user} setPasswordUpdate={setPasswordUpdate} />
      );
    }

    return null;
  };

  return (
    <UserViewDiv>
      {userInfoView()}
      {updateView()}
    </UserViewDiv>
  );
};

export default UserView;
