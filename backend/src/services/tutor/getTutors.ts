// @ts-nocheck
import response from '../../utils/response';
import { Tutor } from '../../entities/Tutor';
export const getTutors = async (req) => {
    const tutorsRaw = await Tutor.find({
        relations: ['user', 'tutoringSubjects'],
    });
    let tutors = tutorsRaw.map((tutor) => {
        tutor.userId = tutor.user.id;
        tutor.username = tutor.user.username;
        tutor.user = undefined;
        return tutor;
    })
    return response.OK(tutors);
}