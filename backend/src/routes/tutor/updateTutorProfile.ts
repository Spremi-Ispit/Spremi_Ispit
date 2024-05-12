// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services';
const { tutorServices } = services;

export const updateTutorProfile = (router) =>
  router
    .route('/updateTutorProfile')
    .put(authorizeUserOnApiRequest, async (req, res) => {
      const response = await tutorServices.updateTutorProfile(req);
      return res.status(response.statusCode).send(response);
    });
