import services from '../../../services';

export const loginUserRepository = async (model) => {
  const dto = await services.post('/auth/login', model);
  return dto.data;
};
