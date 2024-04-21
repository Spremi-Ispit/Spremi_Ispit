import response from '../../utils/response';
import { Tutor } from '../../entities/Tutor';
import { User } from '../../entities/User';
import { Subject } from '../../entities/filters/Subject';
import { In } from 'typeorm';

export const getTutorSubjects = async (req: any) => {
  const { userID } = req.body;

  const user = await User.findOne({
    where: { id: userID },
    relations: ['tutorProfile']
  });

  if (!user) return response.BAD_REQUEST('User not found!');

  if (!user.tutorProfile) return response.BAD_REQUEST('User is not a tutor!');

  const tutor = await Tutor.findOne({
    where: { id: user.tutorProfile.id },
    relations: ['tutorSubjects', 'tutorSubjects.subject']
  });

  if (!tutor) {
    return response.OK([]);
  }

  const tutorSubjects = tutor.tutorSubjects
    .filter((tutorSubject) => tutorSubject.isEnabled)
    .map((tutorSubject) => tutorSubject.subject);

  const subjectIds = tutorSubjects.map((tutorSubject) => tutorSubject.id);

  const matchingSubjects = await Subject.find({
    where: {
      id: In(subjectIds)
    },
    relations: ['departments', 'yearsOfStudy']
  });

  return response.OK(matchingSubjects);
};
