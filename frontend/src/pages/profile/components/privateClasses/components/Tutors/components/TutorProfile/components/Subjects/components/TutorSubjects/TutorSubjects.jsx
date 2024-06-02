import React, { useEffect } from 'react';
import Loader from '../../../../../../../../../../../../components/Loader';
import Table from '../../../../../../../../../../../../components/Table';
import Error from '../../../../../../../../../../../../components/dialogs/Error';
import { useFetch } from '../../../../../../../../../../../../api/useFetch';
import Button from '../../../../../../../../../../../../components/buttons/Button';
import { deleteTutorSubject } from '../../../../../../../../../../../../api/actions/tutor/deleteTutorSubject';
import { getTutorSubjects } from '../../../../../../../../../../../../api/actions/tutor/getTutorSubjects';

const TutorSubjects = ({ tutorId, reloadSubjects, setReloadSubjects }) => {
  const {
    loadingDelete,
    errorDelete,
    fetch: deleteSubject,
    data: subjectId,
  } = useFetch((subjectId, tutorId) => deleteTutorSubject(subjectId, tutorId));
  const {
    loading: loadingSubjects,
    error: errorSubjects,
    data: subjects,
    fetch: fetchSubjects,
  } = useFetch(() => getTutorSubjects(tutorId));

  useEffect(() => {
    fetchSubjects();
  }, []);

  useEffect(() => {
    if (reloadSubjects) {
      fetchSubjects();
      setReloadSubjects(false);
    }
  }, [reloadSubjects]);

  useEffect(() => {
    if (subjectId) {
      fetchSubjects();
    }
  }, [subjectId]);

  useEffect(() => {
    if (subjects) {
      fetchSubjects();
    }
  }, [tutorId]);

  if (errorDelete) {
    return <Error error={errorDelete} />;
  }

  if (errorSubjects) {
    return <Error error={errorSubjects} />;
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
