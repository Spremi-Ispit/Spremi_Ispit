import services from '../../utils/services';

const mapTutorDTO = (tutor) => {
  let newTutor = {
    id: tutor.id,
    phone: tutor.phone,
    description: tutor.message,
    enabled: tutor.isEnabled,
    price: {
      personally: tutor.price,
      group: tutor.groupPrice,
    },
    rating: [],
    subjects: tutor.tutorSubjects
      .filter((subject) => subject.isEnabled)
      .map((subject) => subject.subject),
  };

  return newTutor;
};

export const getTutors = async () => {
  const tutors = await services.get('/tutors/getTutors');
  return tutors.map((tutor) => mapTutorDTO(tutor));
};
