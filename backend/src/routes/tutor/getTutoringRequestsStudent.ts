// @ts-nocheck
import services from '../../services';
const { tutorServices } = services;

export const getTutoringRequestsStudent = async (req, res) => {
  const response = await tutorServices.getTutoringRequestsStudent(req);
  return res.status(response.statusCode).send(response);
};
