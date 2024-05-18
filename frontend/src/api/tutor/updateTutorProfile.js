import services from '../../utils/services';

export const updateTutorProfile = async (data) => {
  const { tutorSubjects, ...tutor } = data;
  return await services.put('/tutors/updateTutorProfile', tutor);
};
