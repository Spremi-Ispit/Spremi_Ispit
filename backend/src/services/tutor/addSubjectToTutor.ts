// @ts-nocheck
import { Tutor } from '../../entities/Tutor';
import { TutorSubject } from '../../entities/TutorSubject';
import { Subject } from '../../entities/filters/Subject';
import response from '../../utils/response';

export const addSubjectToTutor = async (req: any) => {
  const { tutorId, subjectId } = req.body;

  if (!subjectId) return response.BAD_REQUEST('No subject provided!');
  if (!tutorId) return response.BAD_REQUEST('No tutor provided!');

  const tutor = await Tutor.findOne({
    where: { id: tutorId },
    relations: ['tutorSubjects', 'tutorSubjects.subject']
  });

  if (!tutor) return response.BAD_REQUEST('No tutor found!');

  const subject = await Subject.findOne({
    where: { id: subjectId },
    relations: ['tutorSubjects']
  });

  if (!subject) return response.BAD_REQUEST('Subject not found!');

  const tutorSubject = await TutorSubject.findOne({
    where: { tutor, subject }
  });

  if (tutorSubject && tutorSubject.isEnabled)
    return response.BAD_REQUEST(
      `Tutor already tutors the subject ${subject.name}!`
    );

  if (tutorSubject) {
    tutorSubject.isEnabled = true;
    await tutorSubject.save();
    return response.OK(`Added subject : ${tutorSubject.name}`);
  }

  const newTutorSubject = TutorSubject.create({
    tutor,
    subject
  });

  await newTutorSubject.save();
  return response.OK(`Added subject : ${subject.name}`);
};
