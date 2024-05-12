// @ts-nocheck
import services from '../../services';
const { tutorServices } = services;

export const getTutorSubjects = async (req, res) => {
  const response = await tutorServices.getTutorSubjects(req);
  return res.status(response.statusCode).send(response);
};
