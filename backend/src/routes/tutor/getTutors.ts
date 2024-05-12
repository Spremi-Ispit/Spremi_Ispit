// @ts-nocheck
import services from '../../services';
const { tutorServices } = services;

export const getTutors = async (req, res) => {
  const response = await tutorServices.getTutors(req);
  return res.status(response.statusCode).send(response);
};
