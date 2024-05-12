// @ts-nocheck
import services from '../../services';
const { tutorServices } = services;

export const getTutorsBySubject = (router) =>
  router.route('/getTutorsBySubject/:id').get(async (req, res) => {
    const response = await tutorServices.getTutorsBySubject(req);
    return res.status(response.statusCode).send(response);
  });
