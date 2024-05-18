import services from '../../utils/services';

export const createTutorProfile = async () => {
  return await services.post('/tutors/createTutorProfile');
};
