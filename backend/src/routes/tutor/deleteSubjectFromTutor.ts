// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services';
const { tutorServices } = services;

export const deleteSubjectFromTutor = (router) =>
  router
    .route('/deleteSubjectFromTutor')
    .delete(authorizeUserOnApiRequest, async (req, res) => {
      const response = await tutorServices.deleteSubjectFromTutor(req);
      return res.status(response.statusCode).send(response);
    });
