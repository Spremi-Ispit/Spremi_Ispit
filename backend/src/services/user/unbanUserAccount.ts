// @ts-nocheck
import response from '../../utils/response/index';
import { User } from '../../entities/User';

export const unbanUserAccount = async (req) => {
  const { unbanUserId } = req.body;
  const user = await User.findOne({
    where: {
      id: unbanUserId
    }
  });

  if (user) {
    user.banned = false;
    await user.save();
    return response.OK(`User banned`);
  } else {
    return response.NOT_FOUND(`User not found`);
  }
};
