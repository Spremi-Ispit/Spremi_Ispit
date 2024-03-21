import { getAllJSDocTags } from 'typescript';
import response from '../../utils/response';
import { User } from '../../entities/User';

export const deleteSubjectFromTutor = async (req: any) => {
  const {userID, subjectId} = req.body;

  const user = await User.findOne({
    where : {id : userID},
    relations: ["tutorProfile", "tutorProfile.tutoringSubjects"]
  })
  
  if(!user)
    return response.BAD_REQUEST("User not found!");

  if(!user.tutorProfile)
    return response.BAD_REQUEST("User is not a tutor!");

  let tutor = user.tutorProfile;

  tutor.tutoringSubjects = tutor.tutoringSubjects.filter((subject) => subject.id !== subjectId);
  await tutor.save();
  
  return response.OK('Removed subject!');
};
