// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services';
const { tutorServices } = services;

export const deleteTutorProfile = (router) =>
  router
    .route('/deleteTutorProfile')
    .delete(authorizeUserOnApiRequest, async (req, res) => {
      const response = await tutorServices.deleteTutorProfile(req);
      return res.status(response.statusCode).send(response);
    });
