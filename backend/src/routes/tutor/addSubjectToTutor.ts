// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services';
const { tutorServices } = services;

export const addSubjectToTutor = (router) =>
  router
    .route('/addSubjectToTutor')
    .post(authorizeUserOnApiRequest, async (req, res) => {
      const response = await tutorServices.addSubjectToTutor(req);
      return res.status(response.statusCode).send(response);
    });
