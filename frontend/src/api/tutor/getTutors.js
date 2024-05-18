import services from '../../utils/services';

export const getTutors = async () => {
  return await services.get('/tutors/getTutors');
};
