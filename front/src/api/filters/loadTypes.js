import services from '../../utils/services';

export const loadTypes = async () => {
  return await services.get('/filters/type');
};
