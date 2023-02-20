import services from '../../../services/index';

export const registerUserRepository = async (model) => {
  const dto = await services.post('/auth/register', model);
  return dto.data;
};
