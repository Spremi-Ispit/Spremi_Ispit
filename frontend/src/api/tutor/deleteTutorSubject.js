import services from '../../utils/services';

export const deleteTutorSubject = async (subjectId) => {
  return await services.delete('/tutors/deleteSubjectFromTutor', { subjectId });
};
