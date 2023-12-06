import services from '../../utils/services';

export const resetPasswordConfirm = async (resetCode, password) => {
  return await services.post(`/users/resetPasswordConfirm`, {
    resetCode,
    password,
  });
};
