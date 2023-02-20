import { CircularProgress, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledReportIconButton } from './styles';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { reportComment } from '../../../../../../../reduxThunk/actions';
import AlertDialog from '../../../../../../../../../components/alertDialog';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { loginRoute } from '../../../../../../../../../app/router/routes';

export const Report = ({ commentId }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const token = useSelector((state) => state.app.token);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (token) {
      setDialogOpen(true);
    } else {
      navigate(
        {
          pathname: loginRoute,
        },
        {
          state: {
            from: location.pathname,
            searchParams: `${searchParams.toString()}`,
          },
        }
      );
    }
  };

  const viewToRender = (
    <>
      {loading ? <CircularProgress /> : null}
      {error ? error.toString() : null}
      <Tooltip title="Prijavi komentar">
        <StyledReportIconButton
          onClick={handleClick}
          disabled={loading}
          color="primary"
        >
          <PriorityHighIcon />
        </StyledReportIconButton>
      </Tooltip>
      <AlertDialog
        title="Prijavi komentar"
        description={`Prijavljeni komentar će biti pregledan. Ukoliko komentar 
        sadrži neprikladan sadržaj biće ukolnjen sa platforme. `}
        open={dialogOpen}
        setOpen={setDialogOpen}
        handleSubmit={() =>
          dispatch(reportComment(commentId, setLoading, setError))
        }
      />
    </>
  );

  return viewToRender;
};

export default Report;
