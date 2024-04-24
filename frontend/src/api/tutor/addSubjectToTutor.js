import services from '../../utils/services';

export const addSubjectToTutor = async (subjectId) => {
  return services.post('/tutors/addSubjectToTutor', { subjectId });
};
