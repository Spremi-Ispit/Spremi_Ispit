import { Tutor } from '../../entities/Tutor';
import { User } from '../../entities/User';
import response from '../../utils/response';

// Disables tutor profile

export const deleteTutorProfile = async (req: any) => {
  const { userID } = req.body;

  let user = await User.findOne({
    relations: ['tutorProfile'],
    where: { id: userID }
  });
  if (!user) return response.BAD_REQUEST('User not found!');
  if (!user.tutorProfile) return response.BAD_REQUEST('User is not a tutor!');

  user.tutorProfile.isEnabled = false;
  await user.tutorProfile.save();

  return response.OK('Tutor profile has been disabled!');
};
