import services from '../../utils/services';

export const getTutor = async (tutorId) => {
  return await services.post('/tutors/getTutorById', { tutorId });
};
