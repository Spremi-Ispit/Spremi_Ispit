import services from '../../utils/services';

export const getTutorSubjects = async (tutorId) => {
  return await services.post('/tutors/getTutorSubjects/', { tutorId });
};
