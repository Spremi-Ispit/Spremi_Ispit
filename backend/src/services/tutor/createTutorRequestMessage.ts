import { TutorRequestMessage } from '../../entities/TutorRequestMessage';
import { TutoringRequest } from '../../entities/TutoringRequest';
import { User } from '../../entities/User';
import response from '../../utils/response';

export const createTutorRequestMessage = async (req: any) => {
    const { userID, tutoringRequestId, text } = req.body;

    const user = await User.findOne({
        where: { id: userID }
    });

    if (!user)
        return response.BAD_REQUEST("User not found!");

    const tutoringRequest = await TutoringRequest.findOne({
        where: { id: tutoringRequestId },
        relations: ['tutorRequestMessages']
    });

    if (!tutoringRequest)
        return response.BAD_REQUEST("No tutoring request found!");

    const tutorRequestMessage = TutorRequestMessage.create({
        author: user,
        tutoringRequest: tutoringRequest,
        text: text
    });

    await tutorRequestMessage.save();

    return response.OK("Message created successfully!");
}