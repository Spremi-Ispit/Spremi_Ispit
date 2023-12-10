import services from '../../utils/services';

export const loadUserInfo = async (username) => {
  return await services.get(`/users/username/${username}`);
};
