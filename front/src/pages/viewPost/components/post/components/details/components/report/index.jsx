import { CircularProgress, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reportPost } from '../../../../../../reduxThunk/actions';
import { StyledReportIconButton } from './styles';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import AlertDialog from '../../../../../../../../components/alertDialog';
import { loginRoute } from '../../../../../../../../app/router/routes';
import { useNavigate } from 'react-router-dom';

export const Report = ({ postId, postedBy }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.app.token);
  const [errorPostReporting, setErrorPostReporting] = useState(null);
  const [loadingPostReporting, setLoadingPostReporting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const hadlePostReport = () => {
    if (token) {
      setDialogOpen(true);
    } else {
      navigate(loginRoute);
    }
  };

  const viewToRender = (
    <>
      {loadingPostReporting ? <CircularProgress /> : null}
      {errorPostReporting ? 'Prijavljivanje neuspesno' : null}
      <Tooltip title="Prijavi objavu">
        <StyledReportIconButton
          onClick={hadlePostReport}
          disabled={loadingPostReporting}
        >
          <PriorityHighIcon />
        </StyledReportIconButton>
      </Tooltip>
      <AlertDialog
        title="Prijavi objavu"
        description={`Prijavljena objava će biti pregledana. Ukoliko objava 
        sadrži neprikladan sadržaj biće ukolnjena sa platforme. `}
        open={dialogOpen}
        setOpen={setDialogOpen}
        handleSubmit={() =>
          dispatch(
            reportPost(postId, setLoadingPostReporting, setErrorPostReporting)
          )
        }
      />
    </>
  );

  return viewToRender;
};

export default Report;
