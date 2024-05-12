// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services';
const { tutorServices } = services;

export const getTutorById = (router) =>
  router
    .route('/getTutorById')
    .post(authorizeUserOnApiRequest, async (req, res) => {
      const response = await tutorServices.getTutorById(req);
      return res.status(response.statusCode).send(response);
    });
