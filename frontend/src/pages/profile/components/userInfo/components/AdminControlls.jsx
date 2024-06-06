import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from 'react';
import AlertDialog from '../../../../../components/dialogs/AlertDialog';
import Error from '../../../../../components/dialogs/Error';
import Loader from '../../../../../components/Loader';
import styled from 'styled-components';
import { useFetch } from '../../../../../api/useFetch';
import { banUserAccount } from '../../../../../api/actions/user/banUserAccount';
import { unbanUserAccount } from '../../../../../api/actions/user/unbanUserAccount';
import { blacklistUser } from '../../../../../api/actions/user/blacklistUser';
import { useSockets } from '../../../../../utils/useSockets';

const AdminControllsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

const StyledButton = styled(Button)`
  && {
    width: 200px;
    display: flex;
    justify-content: space-between;
  }
`;

export const AdminControlls = ({ user, reloadUserInfo }) => {
  const [deleteForeverDialogOpen, setDeleteForeverDialogOpen] = useState(false);
  const [banDialogOpen, setBanDialogOpen] = useState(false);
  const [unbanDialogOpen, setUnbanDialogOpen] = useState(false);
  const {
    loading: loadingBanUserAccount,
    loaded: loadedBanUserAccount,
    error: errorBanUserAccount,
    fetch: actionBanUserAccount,
  } = useFetch(banUserAccount);
  const socket = useSockets();

  const {
    loading: loadingUnbanUserAccount,
    loaded: loadedUnbanUserAccount,
    error: errorUnbanUserAccount,
    fetch: actionUnbanUserAccount,
  } = useFetch(unbanUserAccount);

  const {
    loading: loadingBlacklistUser,
    loaded: loadedBlacklistUser,
    error: errorBlacklistUser,
    fetch: actionBlacklistUser,
  } = useFetch(blacklistUser);

  const handleBan = () => {
    // actionBanUserAccount(user.id);
    const { id, username } = user;
    const data = {
      room: id,
      username: username,
    };
    socket.emit('ban_user', data);
  };

  const handleUnban = () => {
    actionUnbanUserAccount(user.id);
  };

  const handleDeleteForever = () => {
    actionBlacklistUser(user.id, user.email);
  };

  useEffect(() => {
    if (loadedBanUserAccount || loadedUnbanUserAccount || loadedBlacklistUser) {
      reloadUserInfo();
    }
  }, [loadedBanUserAccount, loadedUnbanUserAccount, loadedBlacklistUser]);

  const loader = () => {
    if (
      loadingBlacklistUser ||
      loadingBanUserAccount ||
      loadingUnbanUserAccount
    ) {
      return <Loader />;
    }

    return null;
  };

  const errorDialog = () => {
    if (errorBanUserAccount) {
      return <Error error={errorBanUserAccount} />;
    }

    if (errorUnbanUserAccount) {
      return <Error error={errorUnbanUserAccount} />;
    }

    if (errorBlacklistUser) {
      return <Error error={errorBlacklistUser} />;
    }

    return null;
  };

  return (
    <>
      <AdminControllsContainer>
        {user?.banned === true ? (
          <StyledButton
            color="success"
            variant="contained"
            endIcon={<LockOpenIcon />}
            onClick={() => setUnbanDialogOpen(true)}
          >
            Odblokiraj profil
          </StyledButton>
        ) : (
          <StyledButton
            color="error"
            variant="contained"
            endIcon={<LockPersonIcon />}
            onClick={() => setBanDialogOpen(true)}
          >
            Blokiraj profil
          </StyledButton>
        )}
        <StyledButton
          color="error"
          variant="contained"
          endIcon={<DeleteForeverIcon />}
          onClick={() => setDeleteForeverDialogOpen(true)}
        >
          Ugasi profil
        </StyledButton>
      </AdminControllsContainer>
      <AlertDialog
        title="Obriši profil"
        description={`Brisanje profila će ukloniti sav sadržaj korisnika sa sajta i sprečiti njegovo ponovno registrovanje ovim email-om. `}
        open={deleteForeverDialogOpen}
        setOpen={setDeleteForeverDialogOpen}
        handleSubmit={handleDeleteForever}
      />
      <AlertDialog
        title={'Blokiraj profil'}
        description={'Da li ste sigurni da želite da blokirate profil?'}
        open={banDialogOpen}
        setOpen={setBanDialogOpen}
        handleSubmit={handleBan}
      />
      <AlertDialog
        title={'Odblokiraj profil'}
        description={'Da li ste sigurni da želite da odblokirate profil?'}
        open={unbanDialogOpen}
        setOpen={setUnbanDialogOpen}
        handleSubmit={handleUnban}
      />
      {errorDialog()}
      {loader()}
    </>
  );
};

export default AdminControlls;
