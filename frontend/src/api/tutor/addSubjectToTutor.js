import services from '../../utils/services';

export const addSubjectToTutor = async (subjectId, tutorId) => {
  return await services.post('/tutors/addSubjectToTutor', {
    subjectId,
    tutorId,
  });
};
