import services from '../../utils/services';

export const loadYearsOfStudy = async () => {
  return await services.get('/filters/yearsOfStudy');
};
