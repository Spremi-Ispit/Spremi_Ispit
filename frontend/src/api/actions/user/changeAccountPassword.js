import services from '../../services';

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
