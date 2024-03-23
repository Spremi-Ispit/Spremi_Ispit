import { Tutor } from '../../entities/Tutor';
import { User } from '../../entities/User';
import response from '../../utils/response';

export const deleteTutorProfile = async (req: any) => {
  const { userID } = req.body;

  const user = await User.findOne({
    relations: ['tutorProfile'],
    where: { id: 2 }
  });
  if (!user) return response.BAD_REQUEST('User not found!');
  if (!user.tutorProfile) return response.BAD_REQUEST('User is not a tutor!');

  let tutor = await Tutor.findOne({
    where: { id: user.tutorProfile.id },
    relations: ['tutoringOffered']
  });
  if (!tutor) return response.BAD_REQUEST('Tutor not found!');
  tutor.tutoringOffered.forEach(async (tr) => {
    await tr.remove();
  });
  await tutor.remove();

  return response.OK('Tutor profile deleted!');
};
