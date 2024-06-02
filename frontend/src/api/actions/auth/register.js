import services from '../../services';

export const register = async (email, password) => {
  return await services.post('/auth/register', {
    email,
    password,
  });
};
