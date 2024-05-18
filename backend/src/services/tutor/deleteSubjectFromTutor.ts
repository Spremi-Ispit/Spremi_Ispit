import response from '../../utils/response';
import { Tutor } from '../../entities/Tutor';

// This function does not delete the subject from the tutor, it only disables it.

export const deleteSubjectFromTutor = async (req: any) => {
  const { tutorId, subjectId } = req.body;

  const tutor = await Tutor.findOne({
    where: { id: tutorId },
    relations: ['tutorSubjects', 'tutorSubjects.subject']
  });
  if (!tutor) return response.BAD_REQUEST('Tutor not found!');

  let tutorSubject = tutor.tutorSubjects.find(
    (ts) => ts.subject.id == subjectId
  );

  if (!tutorSubject)
    return response.BAD_REQUEST("Tutor doesn't tutor that subject!");

  tutorSubject.isEnabled = false;
  await tutorSubject.save();

  return response.OK(subjectId);
};
