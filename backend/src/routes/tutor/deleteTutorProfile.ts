// @ts-nocheck
import services from '../../services';
const { tutorServices } = services;

export const deleteTutorProfile = async (req, res) => {
  const response = await tutorServices.deleteTutorProfile(req);
  return res.status(response.statusCode).send(response);
};
