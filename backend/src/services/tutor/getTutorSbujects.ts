import response from '../../utils/response';
import { Tutor } from '../../entities/Tutor';
import { Subject } from '../../entities/filters/Subject';
import { In } from 'typeorm';

export const getTutorSubjects = async (req: any) => {
  const { tutorId } = req.body;

  const tutor = await Tutor.findOne({
    where: { id: tutorId },
    relations: ['tutorSubjects', 'tutorSubjects.subject']
  });

  if (!tutor) return response.BAD_REQUEST('Tutor not found!');

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
