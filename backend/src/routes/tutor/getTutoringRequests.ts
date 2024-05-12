// @ts-nocheck
import services from '../../services';
const { tutorServices } = services;

export const getTutoringRequests = async (req, res) => {
  const response = await tutorServices.getTutoringRequests(req);
  return res.status(response.statusCode).send(response);
};
