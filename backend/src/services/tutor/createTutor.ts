import { Tutor } from '../../entities/Tutor';
import response from '../../utils/response';

export const createTutor = async (req: any) => {
  const { message, price, groupPrice } = req.body;

  if (!message || !price || !groupPrice)
    return response.BAD_REQUEST(
      'Creating tutor profile should contain : message, price and groupPrice'
    );

  const tutor = Tutor.create({
    price: price,
    groupPrice: groupPrice,
    message: message
  });

  await tutor.save();

  return response.OK(tutor.id);
};
