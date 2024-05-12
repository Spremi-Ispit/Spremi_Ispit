import { Tutor } from '../../entities/Tutor';
import response from '../../utils/response';

export const updateTutorProfile = async (req: any) => {
  const { tutorId, message, price, groupPrice } = req.body;

  const tutor = await Tutor.findOne({
    where: { id: tutorId },
    relations: ['tutorSubjects', 'tutorSubjects.subject']
  });

  if (!tutor) return response.BAD_REQUEST('Tutor not found!');

  if (message) {
    tutor.message = message;
  }

  if (price) {
    tutor.price = price;
  }

  if (groupPrice) {
    tutor.groupPrice = groupPrice;
  }

  await tutor.save();

  return response.OK('Successfully updated!');
};
