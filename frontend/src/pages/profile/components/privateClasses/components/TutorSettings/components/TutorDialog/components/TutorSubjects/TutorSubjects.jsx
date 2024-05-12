import React, { useEffect, useState } from 'react';
import Loader from '../../../../../../../../../../components/Loader';
import Table from '../../../../../../../../../../components/Table';
import ErrorDialog from '../../../../../../../../../../components/dialogs/ErrorDialog';
import { useApiActions } from '../../../../../../../../../../api/useApiActions';
import { useTableColumns } from './useTableColumns';

const TutorSubjects = ({ reloadSubjects, setReloadSubjects }) => {
  const { getTutorSubjects, deleteTutorSubject } = useApiActions();
  const { loading, error, action, response } = getTutorSubjects;
  const {
    loading: loadingDeleteTutorSubject,
    error: errorDeleteTutorSubject,
    action: actionDeleteTutorSubject,
  } = deleteTutorSubject;
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

  const removeSubject = async (subjectId) => {
    await actionDeleteTutorSubject(subjectId);
    setReloadSubjects(true);
  };

  if (errorDeleteTutorSubject) {
    return <ErrorDialog error={errorDeleteTutorSubject} />;
  }

  if (error) {
    return <ErrorDialog error={error} />;
  }

  if (loading || loadingDeleteTutorSubject) {
    return <Loader />;
  }

  return <Table columns={columns(removeSubject)} payload={tutorSubjects} />;
};

export default TutorSubjects;
