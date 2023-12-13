import React, { useEffect, useState } from 'react';
import ReportOffIcon from '@mui/icons-material/ReportOff';
import Loader from '../../../../../components/Loader';
import ErrorDialog from '../../../../../components/dialogs/ErrorDialog';
import { Tooltip } from '@mui/material';
import styled from 'styled-components';
import { useApiActions } from '../../../../../api/useApiActions';
import Button from '../../../../../components/buttons/Button';

const StyledButton = styled(Button)`
  && {
    margin-left: 10px;
  }
`;

export const DismissReport = ({ postId, setLoadPosts }) => {
  const { dismissPostReport } = useApiActions();
  const { loading, error, setError, loaded, action } = dismissPostReport;

  useEffect(() => {
    if (loaded) {
      setLoadPosts(true);
    }
  }, [loaded]);

  const handleDismissReport = () => {
    action(postId);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  return (
    <Tooltip title="Poništi prijavu">
      <StyledButton variant="outlined" onClick={handleDismissReport}>
        <ReportOffIcon />
      </StyledButton>
    </Tooltip>
  );
};

export default DismissReport;
