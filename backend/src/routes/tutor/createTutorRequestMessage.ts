// @ts-nocheck
import services from '../../services';
const { tutorServices } = services;

export const createTutorRequestMessage = async (req, res) => {
  const response = await tutorServices.createTutorRequestMessage(req);
  return res.status(response.statusCode).send(response);
};
