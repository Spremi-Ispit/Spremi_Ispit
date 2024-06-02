import services from '../../services';

export const resetPassword = async (email) => {
  return await services.post(`/users/resetPassword`, { email });
};
