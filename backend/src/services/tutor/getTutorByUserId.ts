import { Tutor } from '../../entities/Tutor';
import { User } from '../../entities/User';
import response from '../../utils/response';

export const getTutorByUserId = async (req: any) => {
  const { userID } = req.body;

  const user = await User.findOne({
    where: { id: userID },
    relations: ['tutorProfile']
  });

  if (!user) return response.BAD_REQUEST('User not found!');

  if (!user.tutorProfile)
    return response.OK({
      price: 0,
      groupPrice: 0,
      message: ''
    });

  const tutor = await Tutor.findOne({
    where: { id: user.tutorProfile.id },
    relations: ['tutorSubjects', 'tutorSubjects.subject']
  });

  return response.OK(tutor);
};
