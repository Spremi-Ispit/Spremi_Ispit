// @ts-nocheck
import { Blacklist } from '../entities/Blacklist';
import response from '../utils/response/index';

export const addEmailToBlacklist = async (req) => {
  const { email } = req.body;

  const userExists = await Blacklist.findOne({
    where: { email }
  });

  if (!userExists) {
    const user = Blacklist.create({
      email
    });

    await user.save();
    return response.OK(`User blacklisted`);
  } else {
    return response.OK(`User already blacklisted`);
  }
};
