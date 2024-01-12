import React, { useEffect, useState } from 'react';
import { CircularProgress, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import AlertDialog from '../../dialogs/AlertDialog';
import { useSelector } from 'react-redux';
import { selectRole, selectUsername } from '../../../redux/app/selectors';
import { userRole } from '../../../redux/app/state';

const StyledDeleteIconButton = styled(IconButton)`
  && {
    margin-right: -8px;
  }
`;

export const Delete = ({
  postId,
  deletePost,
  onSuccessfulDeletion,
  postedBy,
}) => {
  const { loading, loaded, error, action } = deletePost;
  const [dialogOpen, setDialogOpen] = useState(false);
  const username = useSelector(selectUsername);
  const role = useSelector(selectRole);

  useEffect(() => {
    if (loaded) {
      onSuccessfulDeletion();
    }
  }, [loaded]);

  const handleSubmit = () => {
    action(postId);
  };

  if (!(username === postedBy || role === userRole.admin)) {
    return null;
  }

  return (
    <>
      {loading ? <CircularProgress /> : null}
      {error ? 'Brisanje neuspesno' : null}
      <Tooltip title="Obriši objavu">
        <StyledDeleteIconButton
          onClick={() => setDialogOpen(true)}
          disabled={loading}
        >
          <DeleteIcon />
        </StyledDeleteIconButton>
      </Tooltip>
      <AlertDialog
        title="Obriši objavu"
        description={`Da li ste sigurni da želite da obrišete objavu?`}
        open={dialogOpen}
        setOpen={setDialogOpen}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Delete;
