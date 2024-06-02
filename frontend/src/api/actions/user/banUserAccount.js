import services from '../../services';

export const banUserAccount = async (banUserId) => {
  return services.post(`/users/banUser`, { banUserId });
};
