import services from '../../services';

export const loadTypes = async () => {
  return await services.get('/filters/type');
};
