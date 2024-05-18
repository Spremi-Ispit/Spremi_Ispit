import { Tutor } from '../../entities/Tutor';
import response from '../../utils/response';

export const updateTutorProfile = async (req: any) => {
  const {
    id,
    price,
    groupPrice,
    isEnabled,
    message,
    phone,
    likes,
    dislikes,
    name,
    link
  } = req.body;

  const tutor = await Tutor.findOne({
    where: { id },
    relations: ['tutorSubjects', 'tutorSubjects.subject']
  });

  if (!tutor) return response.BAD_REQUEST('Tutor not found!');

  tutor.price = price;
  tutor.groupPrice = groupPrice;
  tutor.isEnabled = isEnabled;
  tutor.message = message;
  tutor.phone = phone;
  tutor.likes = likes;
  tutor.dislikes = dislikes;
  tutor.name = name;
  tutor.link = link;

  await tutor.save();

  return response.OK('Successfully updated!');
};
