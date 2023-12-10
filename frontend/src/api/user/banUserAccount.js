import services from '../../utils/services';

export const banUserAccount = async (banUserId) => {
  return services.post(`/users/banUser`, { banUserId });
};
