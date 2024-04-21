import { Tutor } from '../../entities/Tutor';
import response from '../../utils/response';

export const getTutorByUserId = async (req: any) => {
  const { userID } = req.body;

  const tutor = await Tutor.findOne({
    where: { id: userID }
  });

  if (!tutor) return response.BAD_REQUEST('No tutor found!');

  return response.OK(tutor);
};
