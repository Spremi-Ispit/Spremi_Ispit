// @ts-nocheck
import services from '../../services';
const { tutorServices } = services;

export const updateTutorProfile = async (req, res) => {
  const response = await tutorServices.updateTutorProfile(req);
  return res.status(response.statusCode).send(response);
};
