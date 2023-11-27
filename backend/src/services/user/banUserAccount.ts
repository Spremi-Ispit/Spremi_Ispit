// @ts-nocheck
import response from '../../utils/response/index';
import { User } from '../../entities/User';

export const banUserAccount = async (req) => {
  const { banUserId } = req.body;

  const user = await User.findOne({
    where: {
      id: banUserId
    }
  });

  if (user) {
    user.banned = true;
    await user.save();
    return response.OK(`User banned`);
  } else {
    return response.NOT_FOUND(`User not found`);
  }
};
