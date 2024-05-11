import services from '../../utils/services';

export const getTutoringRequestsStudent = async () => {
  return await services.get('/tutors/getTutoringRequestsStudent/');
};
