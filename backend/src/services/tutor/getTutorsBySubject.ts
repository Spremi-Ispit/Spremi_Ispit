// @ts-nocheck
import { Tutor } from '../../entities/Tutor';
import response from '../../utils/response';

export const getTutorsBySubject = async (req) => {
  const { id } = req.params;
  let data = await Tutor.find({
    relations: ['tutoringSubjects', 'user'],
    where: { tutoringSubjects: { id: id } }
  });

  data = data.map((d) => ({
    id: d.id,
    message: d.message,
    price: d.price,
    groupPrice: d.groupPrice,
    userId: d.user.id,
    username: d.user.username
  }));
  return response.OK(data);
};
