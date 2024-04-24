import response from '../../utils/response';
import { User } from '../../entities/User';

// This function does not delete the subject from the tutor, it only disables it.

export const deleteSubjectFromTutor = async (req: any) => {
  const { userID, subjectId } = req.body;

  const user = await User.findOne({
    where: { id: userID },
    relations: [
      'tutorProfile',
      'tutorProfile.tutorSubjects',
      'tutorProfile.tutorSubjects.subject'
    ]
  });

  if (!user) return response.BAD_REQUEST('User not found!');

  if (!user.tutorProfile) return response.BAD_REQUEST('User is not a tutor!');

  let tutor = user.tutorProfile;

  let tutorSubject = tutor.tutorSubjects.find(
    (ts) => ts.subject.id == subjectId
  );

  if (!tutorSubject)
    return response.BAD_REQUEST("Tutor doesn't tutor that subject!");

  tutorSubject.isEnabled = false;
  await tutorSubject.save();

  return response.OK('Subject tutoring has been disabled!');
};
