import { Tutor } from '../../entities/Tutor';
import response from '../../utils/response';

// Disables tutor profile

export const deleteTutorProfile = async (req: any) => {
  const { tutorId } = req.body;

  const tutor = await Tutor.findOne({
    where: { id: tutorId },
    relations: ['tutorSubjects', 'tutorSubjects.subject']
  });
  if (!tutor) return response.BAD_REQUEST('Tutor not found!');

  tutor.isEnabled = false;
  await tutor.save();

  return response.OK('Tutor profile has been disabled!');
};
