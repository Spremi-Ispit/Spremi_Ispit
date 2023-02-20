import { Button } from '@mui/material';
import React from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { AdminControllsContainer, StyledDeleteForeverButton } from './styles';
import { useState } from 'react';
import AlertDialog from '../../../../../../../../components/alertDialog';
import {
  banUserAccount,
  blacklistUser,
  unbanUserAccount,
} from '../../../../../../reduxThunk/actions';
import { useDispatch } from 'react-redux';
import ErrorDialog from '../../../../../../../../components/errorDialog';
import Loader from '../../../../../../../../components/loader';

const AdminControlls = ({ user, reloadUser }) => {
  const [deleteForeverDialogOpen, setDeleteForeverDialogOpen] = useState(false);
  const [banDialogOpen, setBanDialogOpen] = useState(false);
  const [unbanDialogOpen, setUnbanDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleDeleteForever = () => {
    dispatch(
      blacklistUser(user.id, user.email, setLoading, setError, reloadUser)
    );
  };

  const handleBan = () => {
    dispatch(banUserAccount(user.id, setLoading, setError, reloadUser));
  };

  const handleUnban = () => {
    dispatch(unbanUserAccount(user.id, setLoading, setError, reloadUser));
  };

  return (
    <>
      <AdminControllsContainer>
        {user?.banned === true ? (
          <Button
            color="success"
            variant="contained"
            endIcon={<LockOpenIcon />}
            onClick={() => setUnbanDialogOpen(true)}
          >
            Odblokiraj profil
          </Button>
        ) : (
          <Button
            color="error"
            variant="contained"
            endIcon={<LockPersonIcon />}
            onClick={() => setBanDialogOpen(true)}
          >
            Blokiraj profil
          </Button>
        )}
        <StyledDeleteForeverButton
          color="error"
          variant="contained"
          endIcon={<DeleteForeverIcon />}
          onClick={() => setDeleteForeverDialogOpen(true)}
        >
          Ugasi profil
        </StyledDeleteForeverButton>
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
        description={'Back to the sell'}
        open={banDialogOpen}
        setOpen={setBanDialogOpen}
        handleSubmit={handleBan}
      />
      <AlertDialog
        title={'Odblokiraj profil'}
        description={
          'Da li ste sigurni da želite da pustite korisnika iz kaveza?'
        }
        open={unbanDialogOpen}
        setOpen={setUnbanDialogOpen}
        handleSubmit={handleUnban}
      />
      {error ? <ErrorDialog error={error} setError={setError} /> : null}
      {loading ? <Loader /> : null}
    </>
  );
};

export default AdminControlls;
