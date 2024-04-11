import { User } from '../../entities/User';
import response from '../../utils/response';
import { mapTutoringRequestDTO } from './utils/mapTutoringRequestDTO';

export const getTutoringRequestsStudent = async (req: any) => {
    const { userID } = req.body;

    let user = await User.findOne({
        where: { id: userID },
        relations: ['tutoringRequested', 'tutoringRequested.tutor', 'tutoringRequested.students', 'tutoringRequested.subject']
    })
    if (!user)
        return response.BAD_REQUEST("User not found!");

    return response.OK(user.tutoringRequested.map((tutoringRequest) => mapTutoringRequestDTO(tutoringRequest)));

}