import services from '../../services';

export const getTutors = async () => {
  return await services.get('/tutors/getTutors');
};
