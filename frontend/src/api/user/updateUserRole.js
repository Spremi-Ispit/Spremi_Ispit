import services from '../../utils/services';

export const updateUserRole = (email, role) => async () => {
  return await services.post(`/users/updateRole`, {
    email,
    role,
  });
};
