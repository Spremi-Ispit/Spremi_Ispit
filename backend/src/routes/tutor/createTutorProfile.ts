// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services';
const { tutorServices } = services;

export const createTutorProfile = (router) =>
  router
    .route('/createTutorProfile')
    .post(authorizeUserOnApiRequest, async (req, res) => {
      const response = await tutorServices.createTutorProfile(req);
      return res.status(response.statusCode).send(response);
    });
