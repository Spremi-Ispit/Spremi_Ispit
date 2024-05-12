// @ts-nocheck
import services from '../../services';
const { tutorServices } = services;

export const deleteSubjectFromTutor = async (req, res) => {
  const response = await tutorServices.deleteSubjectFromTutor(req);
  return res.status(response.statusCode).send(response);
};
