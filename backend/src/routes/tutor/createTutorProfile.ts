// @ts-nocheck
import services from '../../services';
const { tutorServices } = services;

export const createTutorProfile = async (req, res) => {
  const response = await tutorServices.createTutorProfile(req);
  return res.status(response.statusCode).send(response);
};
