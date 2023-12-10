import React, { useEffect } from 'react';
import Loader from '../../../../../components/Loader';
import ErrorDialog from '../../../../../components/dialogs/ErrorDialog';
import styled from 'styled-components';
import Button from '../../../../../components/buttons/Button';
import { useApiActions } from '../../../../../api/useApiActions';

const StyledButton = styled(Button)`
  && {
    margin-bottom: 30px;
    margin-left: 10px;
  }
`;

export const DismissReport = ({ commentId, setLoadComments }) => {
  const { dismissCommentReport } = useApiActions();
  const { action, loading, error, setError, loaded } = dismissCommentReport;

  useEffect(() => {
    if (loaded) {
      setLoadComments(true);
    }
  }, [loaded]);

  const handleDismissReport = () => {
    action(commentId);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    <ErrorDialog error={error} setError={setError} />;
  }

  return (
    <StyledButton variant="outlined" onClick={handleDismissReport}>
      Poništi prijavu
    </StyledButton>
  );
};

export default DismissReport;
