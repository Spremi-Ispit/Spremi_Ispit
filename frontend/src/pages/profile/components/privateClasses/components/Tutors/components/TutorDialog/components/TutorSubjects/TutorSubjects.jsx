import React, { useEffect } from 'react';
import Loader from '../../../../../../../../../../components/Loader';
import Table from '../../../../../../../../../../components/Table';
import ErrorDialog from '../../../../../../../../../../components/dialogs/ErrorDialog';
import {
  useFetch,
  useFetchOnLoad,
} from '../../../../../../../../../../api/useFetch';
import Button from '../../../../../../../../../../components/buttons/Button';
import { deleteTutorSubject } from '../../../../../../../../../../api/tutor/deleteTutorSubject';
import { getTutorSubjects } from '../../../../../../../../../../api/tutor/getTutorSubjects';

const TutorSubjects = ({ tutorId, reloadSubjects }) => {
  const {
    loadingDelete,
    errorDelete,
    fetch: deleteSubject,
    data: subjectDeleted,
  } = useFetch((subjectId, tutorId) => deleteTutorSubject(subjectId, tutorId));
  const {
    loading: loadingSubjects,
    error: errorSubjects,
    data: subjects,
    refetch: refetchSubjects,
  } = useFetchOnLoad(() => getTutorSubjects(tutorId));

  useEffect(() => {
    if (subjectDeleted || reloadSubjects) {
      refetchSubjects();
    }
  }, [subjectDeleted, reloadSubjects]);

  if (errorDelete) {
    return <ErrorDialog error={errorDelete} />;
  }

  if (errorSubjects) {
    return <ErrorDialog error={errorSubjects} />;
  }

  if (loadingDelete || loadingSubjects) {
    return <Loader />;
  }

  return (
    subjects && (
      <Table
        columns={[
          {
            name: 'Godina studija',
            width: '25%',
            accessor: (payload) => payload.yearsOfStudy[0].name,
          },
          {
            name: 'Smer',
            width: '25%',
            accessor: (payload) => payload.departments[0].name,
          },
          {
            name: 'Predmet',
            width: '25%',
            accessor: (payload) => payload.name,
          },
          {
            name: 'Obriši predmet',
            width: '25%',
            accessor: (payload) => (
              <Button onClick={() => deleteSubject(payload.id, tutorId)}>
                Obriši predmet
              </Button>
            ),
          },
        ]}
        payload={subjects}
      />
    )
  );
};

export default TutorSubjects;
