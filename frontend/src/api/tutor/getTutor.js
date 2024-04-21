import services from '../../utils/services';

export const getTutor = async () => {
  return services.get('/tutors/getTutors').then((tutors) => {
    return tutors.map((tutor) => mapTutorDTO(tutor));
  });
};
