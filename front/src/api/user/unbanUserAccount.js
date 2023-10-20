import services from '../../utils/services';

export const unbanUserAccount = async (unbanUserId) => {
  return await services.post(`/users/unbanUser`, { unbanUserId });
};
