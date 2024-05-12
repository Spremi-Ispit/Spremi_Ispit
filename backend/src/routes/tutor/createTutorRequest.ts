// @ts-nocheck
import services from '../../services';
const { tutorServices } = services;

export const createTutorRequest = async (req, res) => {
  const response = await tutorServices.createTutorRequest(req);
  return res.status(response.statusCode).send(response);
};
