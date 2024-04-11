import { TutoringRequest } from '../../entities/TutoringRequest';
import { User } from '../../entities/User';
import response from '../../utils/response';
import { mapTutoringRequestDTO } from './utils/mapTutoringRequestDTO';
import { mapUserToUserDTO } from './utils/mapUserToUserDTO';

// Get the tutoring requests as the tutor

export const getTutoringRequests = async (req: any) => {
    const { userID } = req.body;

    const user = await User.findOne({
        where: { id: userID },
        relations: ["tutorProfile", "tutorProfile.tutoringOffered", "tutorProfile.tutoringOffered.students", "tutorProfile.tutoringOffered.subject"]
    });
    if (!user)
        return response.BAD_REQUEST("User was not found!");
    if (!user.tutorProfile)
        return response.BAD_REQUEST("User is not a tutor!");

    let tutoringRequests = user.tutorProfile.tutoringOffered.map((tutoringRequest) => mapTutoringRequestDTO(tutoringRequest));

    return response.OK(tutoringRequests);
}