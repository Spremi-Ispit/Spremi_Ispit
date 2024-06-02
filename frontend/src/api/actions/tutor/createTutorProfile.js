import services from '../../services';

export const createTutorProfile = async () => {
  return await services.post('/tutors/createTutorProfile');
};
