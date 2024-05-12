import { Tutor } from '../../entities/Tutor';
import response from '../../utils/response';

export const getTutorById = async (req: any) => {
  const { tutorId } = req.body;

  const tutor = await Tutor.findOne({
    where: { id: tutorId },
    relations: ['tutorSubjects', 'tutorSubjects.subject']
  });

  return response.OK(tutor);
};
