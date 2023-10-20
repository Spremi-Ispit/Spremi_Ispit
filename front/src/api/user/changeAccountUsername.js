import services from '../../utils/services';

export const changeAccountUsername = async (
  newUsername,
  confirmedPassword,
  email
) => {
  return await services.post(`/users/updateUsername`, {
    email,
    newUsername,
    password: confirmedPassword,
  });
};
