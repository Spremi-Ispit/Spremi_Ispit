import services from '../../../services';

export const loadUserInfoRepository = async (username) => {
  const dto = await services.get(`/users/username/${username}`);
  return mapUserDTO(dto.data);
};

export const changeAccountPasswordRepository = async (
  newPassword,
  confirmedPassword,
  email
) => {
  const dto = await services.post(`/users/updatePassword`, {
    email,
    newPassword,
    password: confirmedPassword,
  });
  return dto.data;
};

export const changeAccountUsernameRepository = async (
  newUsername,
  confirmedPassword,
  email
) => {
  const dto = await services.post(`/users/updateUsername`, {
    email,
    newUsername,
    password: confirmedPassword,
  });
  return dto.data;
};

export const blacklistUserAccountRepository = async (
  blacklistUserId,
  email
) => {
  const dto = await services.post(`/users/blacklistUser`, {
    email,
    blacklistUserId,
  });
  return dto.data;
};
export const banUserAccountRepository = async (banUserId) => {
  const dto = await services.post(`/users/banUser`, { banUserId });
  return dto.data;
};
export const unbanUserAccountRepository = async (unbanUserId) => {
  const dto = await services.post(`/users/unbanUser`, { unbanUserId });
  return dto.data;
};

function mapUserDTO(user) {
  return {
    ...user,
    banned: user.banned === 1 ? true : false,
  };
}
