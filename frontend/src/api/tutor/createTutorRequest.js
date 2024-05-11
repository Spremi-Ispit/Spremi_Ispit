import services from '../../utils/services';

export const createTutorRequest = async (data) => {
  return await services.post('/tutors/createTutorRequest', data);
};
