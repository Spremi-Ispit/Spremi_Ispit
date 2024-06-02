import services from '../../services';

export const unbanUserAccount = async (unbanUserId) => {
  return await services.post(`/users/unbanUser`, { unbanUserId });
};
