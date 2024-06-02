import React, { useEffect, useState } from 'react';
import ReportOffIcon from '@mui/icons-material/ReportOff';
import Loader from '../../../../../components/Loader';
import Error from '../../../../../components/dialogs/Error';
import { Tooltip } from '@mui/material';
import styled from 'styled-components';
import Button from '../../../../../components/buttons/Button';
import { useFetch } from '../../../../../api/useFetch';
import { dismissPostReport } from '../../../../../api/actions/posts/dismissPostReport';

const StyledButton = styled(Button)`
  && {
    margin-left: 10px;
  }
`;

export const DismissReport = ({ postId, setLoadPosts }) => {
  const { loading, error, loaded, fetch } = useFetch(dismissPostReport);

  useEffect(() => {
    if (loaded) {
      setLoadPosts(true);
    }
  }, [loaded]);

  const handleDismissReport = () => {
    fetch(postId);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
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
