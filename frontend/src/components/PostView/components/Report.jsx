import React, { useState } from 'react';
import { CircularProgress, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import AlertDialog from '../../dialogs/AlertDialog';
import { useNavigate } from 'react-router-dom';
import { loginRoute } from '../../../router/routes';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { selectToken } from '../../../redux/app/selectors';
import Error from '../../dialogs/Error';

const StyledReportIconButton = styled(IconButton)`
  && {
    margin-right: -8px;
  }
`;

export const Report = ({ postId, reportPost }) => {
  const { loading, error, action } = reportPost;
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
    return <Error error={error} />;
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
};
export default Report;
