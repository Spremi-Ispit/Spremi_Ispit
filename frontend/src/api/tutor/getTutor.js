import services from '../../utils/services';

export const getTutor = async () => {
  return await services.get('/tutors/getTutorByUserId');
};
