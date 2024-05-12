// @ts-nocheck
import services from '../../services';
const { tutorServices } = services;

export const getTutorByUserId = async (req, res) => {
  const response = await tutorServices.getTutorByUserId(req);
  return res.status(response.statusCode).send(response);
};
