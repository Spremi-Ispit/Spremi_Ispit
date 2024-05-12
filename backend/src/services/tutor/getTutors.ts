import response from '../../utils/response';
import { Tutor } from '../../entities/Tutor';
import { mapUserToUserDTO } from './utils/mapUserToUserDTO';

export const getTutors = async (req: any) => {
  const tutorsRaw = await Tutor.find({
    relations: ['user', 'tutorSubjects', 'tutorSubjects.subject']
  });

  let tutors = tutorsRaw.map((tutor) => {
    let user = mapUserToUserDTO(tutor.user);
    return { ...tutor, user: user };
  });
  return response.OK(tutors);
};
