import { Tutor } from '../../entities/Tutor';
import { User } from '../../entities/User';
import { Subject } from '../../entities/filters/Subject';
import response from '../../utils/response';

export const addSubjectToTutor = async (req: any) => {
  const { userID, subjectId } = req.body;

  if (!subjectId)
    return response.BAD_REQUEST('No subject provided!');

  const user = await User.findOne({
    where: { id: userID },
    relations: ['tutorProfile']
  });

  if (!user)
    return response.BAD_REQUEST('User not found!');

  if (!user.tutorProfile)
    return response.BAD_REQUEST('User is not a tutor!');

  let tutor = await Tutor.findOne({
    where: { id: user.tutorProfile.id },
    relations: ['tutoringSubjects']
  });

  if (!tutor)
    return response.BAD_REQUEST('No tutor found!');

  const subject = await Subject.findOne({
    where: { id: subjectId }
  });

  if (!subject)
    return response.BAD_REQUEST('Subject not found!');

  if (tutor.tutoringSubjects.filter((s) => s.id === subject.id).length > 0)
    return response.BAD_REQUEST('Tutor already tutors the subject!');

  tutor.tutoringSubjects.push(subject);

  await tutor.save();

  return response.OK(`Added subject : ${subject.name}`);
};
