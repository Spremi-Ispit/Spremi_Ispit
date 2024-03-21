// @ts-nocheck
import response from '../../utils/response';
import { Tutor } from '../../entities/Tutor';
import { User } from '../../entities/User';
import { dataSource } from '../../entities/DataSource';
export const getAllTutors = async (req) => {
    const tutorsRaw = await Tutor.find({
        relations: ['user', 'tutoringSubjects']
    });
    let tutors = tutorsRaw.map((tutor)=>{
        tutor.userId = tutor.user.id
        tutor.user = undefined;
        return tutor;
    })
    return response.OK(tutors);
}