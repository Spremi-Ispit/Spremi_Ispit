import { Subject } from '../../entities/filters/Subject';
import response from '../../utils/response';

export const getTutorsBySubject = async (req: any) => {
  const { id } = req.params;

  let subject = await Subject.findOne({
    relations: [
      'tutorSubjects',
      'tutorSubjects.tutor',
      'tutorSubjects.tutor.tutorSubjects',
      'tutorSubjects.tutor.tutorSubjects.subject'
    ],
    where: { id: id }
  });

  if (!subject) return response.BAD_REQUEST('No subject found!');

  return response.OK(
    subject.tutorSubjects.map((tutorSubject) => tutorSubject.tutor)
  );
};
