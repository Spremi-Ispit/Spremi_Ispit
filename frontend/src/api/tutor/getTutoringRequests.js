import services from '../../utils/services';

export const getTutoringRequests = async () => {
  return await services.get('/tutors/getTutoringRequests/');
};
