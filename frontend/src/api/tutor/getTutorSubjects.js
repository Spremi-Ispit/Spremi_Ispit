import services from '../../utils/services';

export const getTutorSubjects = async () => {
  return await services.get('/tutors/getTutorSubjects/');
};
