

import { Tutor } from "../../entities/Tutor";
import { User } from "../../entities/User";
import response from "../../utils/response";

export const createTutorProfile = async (req: any) => {
  const { userID, message, price, groupPrice } = req.body;

  const user = await User.findOne({
    where: { id: userID },
    relations: ["tutorProfile"]
  });

  if (!user)
    return response.BAD_REQUEST("User not found!");

  if (user.tutorProfile) {
    user.tutorProfile.isEnabled = true;
    await user.tutorProfile.save();
    return response.OK("Tutor profile has been activated!");
  }
  if (!message || !price || !groupPrice)
    return response.BAD_REQUEST("Creating tutor profile should contain : message, price and groupPrice");

  let tutorProfile = Tutor.create({
    price: price,
    groupPrice: groupPrice,
    message: message,
    user: user
  });

  await tutorProfile.save();

  return response.OK(tutorProfile.id);
}