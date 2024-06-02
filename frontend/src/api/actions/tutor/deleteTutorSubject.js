import services from '../../services';

export const deleteTutorSubject = async (subjectId, tutorId) => {
  return await services.delete('/tutors/deleteSubjectFromTutor', {
    subjectId,
    tutorId,
  });
};
