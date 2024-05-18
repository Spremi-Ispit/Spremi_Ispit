import React, { useEffect } from 'react';
import Loader from '../../../../../components/Loader';
import Error from '../../../../../components/dialogs/Error';
import Button from '../../../../../components/buttons/Button';
import { useApiActions } from '../../../../../api/useApiActions';

export const DismissReport = ({ commentId, setLoadComments }) => {
  const { dismissCommentReport } = useApiActions();
  const { action, loading, error, loaded } = dismissCommentReport;

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
    <Error error={error} />;
  }

  return (
    <Button onClick={handleDismissReport}>
      <h3>Poništi prijavu</h3>
    </Button>
  );
};

export default DismissReport;
