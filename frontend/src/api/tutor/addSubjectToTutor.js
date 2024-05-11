import services from '../../utils/services';

export const addSubjectToTutor = async (subjectId) => {
  return await services.post('/tutors/addSubjectToTutor', { subjectId });
};
