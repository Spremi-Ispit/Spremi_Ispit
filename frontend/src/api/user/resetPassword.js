import services from '../../utils/services';

export const resetPassword = async (email) => {
  return await services.post(`/users/resetPassword`, { email });
};
