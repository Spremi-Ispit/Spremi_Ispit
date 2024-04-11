import { Tutor } from '../../entities/Tutor';
import { TutoringRequest } from '../../entities/TutoringRequest';
import { User } from '../../entities/User';
import { Subject } from '../../entities/filters/Subject';
import response from '../../utils/response';

export const createTutorRequest = async (req: any) => {
  const { tutorId, subjectId, userID } = req.body;

  if (!tutorId || !subjectId)
    return response.BAD_REQUEST('No tutor or subject selected!');

  const user = await User.findOne({
    where: { id: userID }
  });

  if (!user) return response.NOT_FOUND('User was not found!');

  const subject = await Subject.findOne({
    where: { id: subjectId }
  });

  if (!subject) return response.NOT_FOUND('Subject was not found!');

  const tutor = await Tutor.findOne({
    where: { id: tutorId },
    relations: ['user']
  });

  if (!tutor) return response.NOT_FOUND('Tutor was not found!');

  if (tutor.user.id === userID)
    return response.BAD_REQUEST("Can't request to tutor yourself!");

  const newTutoringRequest = TutoringRequest.create({
    students: [user,],
    subject: subject,
    tutor: tutor
  });

  await newTutoringRequest.save();

  return response.OK(newTutoringRequest.id);
};
