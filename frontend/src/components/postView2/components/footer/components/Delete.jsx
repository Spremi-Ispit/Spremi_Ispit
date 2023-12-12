import React, { useEffect, useState } from 'react';
import { CircularProgress, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { homeRoute } from '../../../../../router/routes';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import AlertDialog from '../../../../dialogs/AlertDialog';
import { useAppActions } from '../../../../../redux/useAppActions';
import { usePostViewContext } from '../../../PostViewContext';
import { postViewType } from '../../../PostView';
import useActions from '../../../../../pages/viewPost/useActions';

const StyledDeleteIconButton = styled(IconButton)`
  && {
    margin-right: -8px;
  }
`;

export const Delete = ({ postId }) => {
  const { deletePost } = useActions();
  const { loading, loaded, error, action } = deletePost;
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  const { type } = usePostViewContext();

  useEffect(() => {
    if (loaded) {
      if (type === postViewType.post) {
        navigate(homeRoute);
      }

      if (type === postViewType.comment) {
        setCommentsLoading(true);
      }
    }
  }, [loaded]);

  const handleSubmit = () => {
    action(postId);
  };

  const { viewPostActions } = useAppActions();
  const { setCommentsLoading } = viewPostActions;

  const viewToRender = (
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

  return viewToRender;
};

export default Delete;
