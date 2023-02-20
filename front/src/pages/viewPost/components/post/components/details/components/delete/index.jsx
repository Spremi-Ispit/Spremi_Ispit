import { CircularProgress, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../../../../reduxThunk/actions';
import { StyledDeleteIconButton } from './styles';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { homeRoute } from '../../../../../../../../app/router/routes';
import AlertDialog from '../../../../../../../../components/alertDialog';

export const Delete = ({ postId }) => {
  const [errorPostDeleting, setErrorPostDeleting] = useState(null);
  const [loadingPostDeleting, setLoadingPostDeleting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);

  const viewToRender = (
    <>
      {loadingPostDeleting ? <CircularProgress /> : null}
      {errorPostDeleting ? 'Brisanje neuspesno' : null}
      <Tooltip title="Obriši objavu">
        <StyledDeleteIconButton
          onClick={() => setDialogOpen(true)}
          disabled={loadingPostDeleting}
        >
          <DeleteIcon />
        </StyledDeleteIconButton>
      </Tooltip>
      <AlertDialog
        title="Obriši objavu"
        description={`Da li ste sigurni da želite da obrišete objavu?`}
        open={dialogOpen}
        setOpen={setDialogOpen}
        handleSubmit={() =>
          dispatch(
            deletePost(
              postId,
              setLoadingPostDeleting,
              setErrorPostDeleting,
              () => navigate(homeRoute)
            )
          )
        }
      />
    </>
  );

  return viewToRender;
};

export default Delete;
