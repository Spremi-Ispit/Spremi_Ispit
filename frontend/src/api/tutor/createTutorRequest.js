import services from '../../utils/services';

export const createTutorRequest = async (data) => {
  return services.post('/tutors/createTutorRequest', data);
};
