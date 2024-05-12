// @ts-nocheck
import services from '../../services';
const { tutorServices } = services;

export const addSubjectToTutor = async (req, res) => {
  const response = await tutorServices.addSubjectToTutor(req);
  return res.status(response.statusCode).send(response);
};
