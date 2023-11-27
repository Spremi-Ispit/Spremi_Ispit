import services from '../../utils/services';

export const loadUsernamesWithRoles = async () => {
  return await services.get(`/users/roles`);
};
