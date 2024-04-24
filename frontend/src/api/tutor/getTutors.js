import services from '../../utils/services';

const mapTutorDTO = (tutor) => {
  let newTutor = {
    id: tutor.id,
    link: tutor.chatLink,
    name: tutor.user.username,
    userId: tutor.user.id,
    description: tutor.message,
    price: {
      personally: tutor.price,
      group: tutor.groupPrice
    },
    rating: [],
    subjects: tutor.tutorSubjects.filter((subject) => subject.isEnabled).map((subject) => subject.subject),
  };
  console.log(tutor);
  console.log(newTutor);
  return newTutor;
}

export const getTutors = async () => {
  return services.get('/tutors/getTutors').then((tutors) => {
    return tutors.map((tutor) => mapTutorDTO(tutor));
  });
};
