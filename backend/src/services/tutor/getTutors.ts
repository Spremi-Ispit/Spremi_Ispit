import response from '../../utils/response';
import { Tutor } from '../../entities/Tutor';

export const getTutors = async (req: any) => {
  const tutors = await Tutor.find({
    relations: ['tutorSubjects', 'tutorSubjects.subject']
  });

  return response.OK(tutors);
};
