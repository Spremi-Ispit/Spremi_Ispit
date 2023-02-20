import React, { useState } from 'react';
import ReportOffIcon from '@mui/icons-material/ReportOff';
import { StyledButton } from './styles';
import { dismissCommentReport } from '../../../../../../reduxThunk/actions';
import { useDispatch } from 'react-redux';
import Loader from '../../../../../../../../components/loader';
import ErrorDialog from '../../../../../../../../components/errorDialog';
import { Tooltip } from '@mui/material';

export const DismissReport = ({ commentId }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleDismissReport = () => {
    dispatch(dismissCommentReport(commentId, setLoading, setError));
  };

  const viewToRender = (
    <Tooltip title="Poništi prijavu">
      <StyledButton variant="outlined" onClick={handleDismissReport}>
        <ReportOffIcon />
      </StyledButton>
    </Tooltip>
  );

  return loading ? (
    <Loader />
  ) : error ? (
    <ErrorDialog error={error} setError={setError} />
  ) : (
    viewToRender
  );
};

export default DismissReport;
