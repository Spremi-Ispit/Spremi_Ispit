import { Tutor } from '../../entities/Tutor';
import { TutorSubject } from '../../entities/TutorSubject';
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
    relations: ['tutorSubjects', 'tutorSubjects.subject']
  });

  if (!tutor)
    return response.BAD_REQUEST('No tutor found!');

  if (tutor.tutorSubjects.filter((s) => s.subject.id === subjectId).length > 0)
    return response.BAD_REQUEST('Tutor already tutors the subject!');

  const subject = await Subject.findOne({
    where: { id: subjectId },
    relations: ['tutorSubjects']
  });

  if (!subject)
    return response.BAD_REQUEST('Subject not found!');

  let tutorSubject = TutorSubject.create({
    tutor: tutor,
    subject: subject
  });

  tutor.tutorSubjects.push(tutorSubject);
  subject.tutorSubjects.push(tutorSubject);
  await tutorSubject.save();

  await subject.save();
  await tutor.save();
  return response.OK(`Added subject : ${subject.name}`);
};
