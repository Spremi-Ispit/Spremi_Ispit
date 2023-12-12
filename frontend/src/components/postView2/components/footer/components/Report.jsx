import React, { useState } from 'react';
import { CircularProgress, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import AlertDialog from '../../../../dialogs/AlertDialog';
import { useNavigate } from 'react-router-dom';
import { loginRoute } from '../../../../../router/routes';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { selectToken } from '../../../../../redux/app/selectors';
import ErrorDialog from '../../../../dialogs/ErrorDialog';
import useActions from '../../../../../pages/viewPost/useActions';

const StyledReportIconButton = styled(IconButton)`
  && {
    margin-right: -8px;
  }
`;

export const Report = ({ postId }) => {
  const { reportPost } = useActions();
  const { loading, error, setError, action } = reportPost;
  const navigate = useNavigate();

  const token = useSelector(selectToken);
  const [dialogOpen, setDialogOpen] = useState(false);

  const hadlePostReport = () => {
    if (token) {
      setDialogOpen(true);
    } else {
      navigate(loginRoute);
    }
  };

  const handleSubmit = () => {
    action(postId);
  };

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Tooltip title="Prijavi objavu">
        <StyledReportIconButton onClick={hadlePostReport} disabled={loading}>
          <PriorityHighIcon />
        </StyledReportIconButton>
      </Tooltip>
      <AlertDialog
        title="Prijavi objavu"
        description={`Prijavljena objava će biti pregledana. Ukoliko objava 
        sadrži neprikladan sadržaj biće ukolnjena sa platforme. `}
        open={dialogOpen}
        setOpen={setDialogOpen}
        handleSubmit={handleSubmit}
      />
    </>
  );

  return viewToRender;
};
export default Report;
