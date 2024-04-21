import services from '../../utils/services';

const mapTutorDTO = (tutor) => {
  let newTutor = {
    id: tutor.id,
    link: tutor.chatLink,
    name: tutor.user.username,
    description: tutor.message,
    price: {
      personally: tutor.price,
      group: tutor.group,
    },
    rating: [],
    user: tutor.user,
    subjects: tutor.tutorSubjects
      .filter((subject) => subject.isEnabled)
      .map((subject) => subject.subject),
  };
  console.log(newTutor);
  return newTutor;
};

export const getTutors = async () => {
  return services.get('/tutors/getTutors').then((tutors) => {
    return tutors.map((tutor) => mapTutorDTO(tutor));
  });
};
