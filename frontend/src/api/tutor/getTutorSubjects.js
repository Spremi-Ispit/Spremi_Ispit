import services from '../../utils/services';

export const getTutorSubjects = async () => {
  return services.get('/tutors/getTutorSubjects/');
};
