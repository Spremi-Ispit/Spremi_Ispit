import services from '../../services';

export const resetPasswordConfirm = async (resetCode, password) => {
  return await services.post(`/users/resetPasswordConfirm`, {
    resetCode,
    password,
  });
};
