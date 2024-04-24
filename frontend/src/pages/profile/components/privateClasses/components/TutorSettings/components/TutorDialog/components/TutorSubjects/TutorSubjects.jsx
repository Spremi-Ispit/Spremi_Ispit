import React, { useEffect, useState } from 'react';
import Loader from '../../../../../../../../../../components/Loader';
import Table from '../../../../../../../../../../components/Table';
import ErrorDialog from '../../../../../../../../../../components/dialogs/ErrorDialog';
import { useApiActions } from '../../../../../../../../../../api/useApiActions';
import { useTableColumns } from './useTableColumns';

const TutorSubjects = ({ reloadSubjects, setReloadSubjects }) => {
  const { getTutorSubjects } = useApiActions();
  const { loading, error, setError, action, response } = getTutorSubjects;
  const [tutorSubjects, setTutorSubjects] = useState([]);
  const columns = useTableColumns();

  useEffect(() => {
    if (response) {
      setTutorSubjects(response);
    }
  }, [response]);

  useEffect(() => {
    if (reloadSubjects) {
      action();
      setReloadSubjects(false);
    }
  }, [reloadSubjects]);

  useEffect(() => {
    action();
  }, []);

  const removeSubject = (subjectId) => {
    console.log(subjectId);
  };

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  if (loading) {
    return <Loader />;
  }

  return <Table columns={columns(removeSubject)} payload={tutorSubjects} />;
};

export default TutorSubjects;
