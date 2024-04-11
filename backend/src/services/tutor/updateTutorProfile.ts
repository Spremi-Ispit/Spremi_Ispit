
import { User } from "../../entities/User";
import response from "../../utils/response";

export const updateTutorProfile = async (req: any) => {
    const { userID, message, price, groupPrice } = req.body;

    const user = await User.findOne({
        where: { id: userID },
        relations: ["tutorProfile"]
    });

    if (!user)
        return response.BAD_REQUEST("User not found!");

    if (!user.tutorProfile) {
        return response.BAD_REQUEST("This user is not a tutor!");
    }

    if (message)
        user.tutorProfile.message = message;
    if (price)
        user.tutorProfile.price = price;
    if (groupPrice)
        user.tutorProfile.groupPrice = groupPrice;

    await user.tutorProfile.save();

    return response.OK("Successfully updated!");
}