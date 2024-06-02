import services from '../../services';

export const login = async (email, password) => {
  return await services.post('/auth/login', {
    email,
    password,
  });
};
