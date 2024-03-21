import { TutoringRequest } from '../../entities/TutoringRequest';
import response from '../../utils/response';
import { mapUserToUserDTO } from './utils/mapUserToUserDTO';

export const getTutoringRequestsStudent = async (req : any) =>{
    const {userID} = req.body;

    let tutoringRequests = await TutoringRequest.find({
        relations: ['tutor', 'student', 'subject', 'tutor.user'],
        where: {student: [{id: userID}]}
    });

    let transformed = tutoringRequests.map((tr)=>{
        let userDto = mapUserToUserDTO(tr.tutor.user)
        let tutor : any = {...tr.tutor};
        tutor.user = userDto;
        return {...tr, student : mapUserToUserDTO(tr.student), tutor: tutor};
    });

    return response.OK(transformed);
}