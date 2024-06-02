import services from '../../services';

export const loadUsernamesWithRoles = async () => {
  return await services.get(`/users/roles`);
};
