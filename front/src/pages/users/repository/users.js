import services from '../../../services/index';

export const loadUserAndLikesRepository = async () => {
  const dto = await services.get(`/users/likes`);
  return dto.data;
};

export const loadUsernamesWithRolesRepository = async () => {
  const dto = await services.get(`/users/roles`);
  return dto.data;
};

export const updateUserRoleRepository = async (model) => {
  const dto = await services.post(`/users/updateRole`, model);
  return dto.data;
};
