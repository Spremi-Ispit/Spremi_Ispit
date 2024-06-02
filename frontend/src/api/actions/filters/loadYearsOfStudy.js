import services from '../../services';

export const loadYearsOfStudy = async () => {
  return await services.get('/filters/yearsOfStudy');
};
