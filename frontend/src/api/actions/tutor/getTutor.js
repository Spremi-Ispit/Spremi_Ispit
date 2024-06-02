import services from '../../services';

export const getTutor = async (tutorId) => {
  return await services.post('/tutors/getTutorById', { tutorId });
};
