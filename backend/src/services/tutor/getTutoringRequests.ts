import { TutoringRequest } from '../../entities/TutoringRequest';
import { User } from '../../entities/User';
import response from '../../utils/response';
import { mapUserToUserDTO } from './utils/mapUserToUserDTO';

export const getTutoringRequests = async (req : any) =>{
    const {userID} = req.body;
    
    const user = await User.findOne({
        where: {id : userID},
        relations: ["tutorProfile"]
    });
    if(!user)
        return response.BAD_REQUEST("User was not found!");
    if(!user.tutorProfile)
        return response.BAD_REQUEST("User is not a tutor!");

    let tutoringRequests = await TutoringRequest.find({
        relations: ['tutor', 'student', 'subject'],
        where: {tutor: [{id: user.tutorProfile.id}]}
    })

    let transformed = tutoringRequests.map((tr)=>{
        let userDto = mapUserToUserDTO(tr.student);
        return {...tr, student : userDto};
    })

    return response.OK(transformed);
}