import express from 'express';
import { authorizeUserOnApiRequest } from '../middleware/authorizeUserOnApiRequest';
import {
  createTutorRequest,
  getAllTutors,
  getTutoringRequests,
  getTutorsBySubject,
  createTutorProfile,
  addSubjectToTutor,
  getTutoringRequestsStudent,
  deleteTutorProfile,
  deleteSubjectFromTutor
} from '../controllers/tutor.controller';
const tutorsRoutes = express.Router();

tutorsRoutes.route('/all').get(getAllTutors);
tutorsRoutes.route('/getTutorsBySubject/:id').get(getTutorsBySubject);
tutorsRoutes
  .route('/createTutorRequest')
  .post(authorizeUserOnApiRequest, createTutorRequest);
tutorsRoutes
  .route('/getTutoringRequests')
  .get(authorizeUserOnApiRequest, getTutoringRequests);
tutorsRoutes
  .route('/getTutoringRequestsStudent')
  .get(authorizeUserOnApiRequest, getTutoringRequestsStudent);
tutorsRoutes
  .route('/createTutorProfile')
  .post(authorizeUserOnApiRequest, createTutorProfile);
tutorsRoutes
  .route('/deleteTutorProfile')
  .delete(authorizeUserOnApiRequest, deleteTutorProfile);
tutorsRoutes
  .route('/addSubjectToTutor')
  .post(authorizeUserOnApiRequest, addSubjectToTutor);
tutorsRoutes
  .route('/deleteSubjectFromTutor')
  .delete(authorizeUserOnApiRequest, deleteSubjectFromTutor);

export default tutorsRoutes;
