import React, { useEffect } from 'react';
import Loader from '../../../../../components/Loader';
import Error from '../../../../../components/dialogs/Error';
import Button from '../../../../../components/buttons/Button';
import { useFetch } from '../../../../../api/useFetch';
import { dismissCommentReport } from '../../../../../api/actions/comments/dismissCommentReport';

export const DismissReport = ({ commentId, setLoadComments }) => {
  const { fetch, loading, error, loaded } = useFetch(dismissCommentReport);

  useEffect(() => {
    if (loaded) {
      setLoadComments(true);
    }
  }, [loaded]);

  const handleDismissReport = () => {
    fetch(commentId);
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
