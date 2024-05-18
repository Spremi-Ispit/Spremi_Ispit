import { Tutor } from '../../entities/Tutor';
import response from '../../utils/response';

export const createTutorProfile = async (req: any) => {
  const tutor = Tutor.create();

  await tutor.save();

  return response.OK(tutor.id);
};
