import services from '../../utils/services';

export const changeAccountPassword = async (
  newPassword,
  confirmedPassword,
  email
) => {
  return await services.post(`/users/updatePassword`, {
    email,
    newPassword,
    password: confirmedPassword,
  });
};
