import { CircularProgress, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledDeleteIconButton } from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import AlertDialog from '../../../../../../../../../components/alertDialog';
import { deleteComment } from '../../../../../../../reduxThunk/actions';

export const Delete = ({ commentId }) => {
  const [errorCommentDeleting, setErrorCommentDeleting] = useState(null);
  const [loadingCommentDeleting, setLoadingCommentDeleting] = useState(false);
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);

  const viewToRender = (
    <>
      {loadingCommentDeleting ? <CircularProgress /> : null}
      {errorCommentDeleting ? 'Brisanje neuspesno' : null}
      <Tooltip title="Obriši komentar">
        <StyledDeleteIconButton
          onClick={() => setDialogOpen(true)}
          disabled={loadingCommentDeleting}
          color="primary"
        >
          <DeleteIcon />
        </StyledDeleteIconButton>
      </Tooltip>
      <AlertDialog
        title="Obriši komentar"
        description={`Da li ste sigurni da želite da obrišete komentar?`}
        open={dialogOpen}
        setOpen={setDialogOpen}
        handleSubmit={() =>
          dispatch(
            deleteComment(
              commentId,
              setLoadingCommentDeleting,
              setErrorCommentDeleting
            )
          )
        }
      />
    </>
  );

  return viewToRender;
};

export default Delete;
