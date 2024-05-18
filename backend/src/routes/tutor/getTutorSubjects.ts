// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services';
const { tutorServices } = services;

export const getTutorSubjects = (router) =>
  router
    .route('/getTutorSubjects')
    .post(authorizeUserOnApiRequest, async (req, res) => {
      const response = await tutorServices.getTutorSubjects(req);
      return res.status(response.statusCode).send(response);
    });
