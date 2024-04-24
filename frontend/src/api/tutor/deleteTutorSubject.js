import services from '../../utils/services';

export const deleteTutorSubject = async (subjectId) => {
  return services.delete('/tutors/deleteSubjectFromTutor', { subjectId });
};
