import services from '../../utils/services';

export const blacklistUser = async (blacklistUserId, email) => {
  return await services.post(`/users/blacklistUser`, {
    email,
    blacklistUserId,
  });
};
