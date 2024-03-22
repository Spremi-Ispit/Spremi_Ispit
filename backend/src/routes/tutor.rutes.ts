import express from 'express';
import { authorizeUserOnApiRequest } from '../middleware/authorizeUserOnApiRequest';
import { createTutorRequest, getAllTutors, getTutoringRequests, getTutorsBySubject, createTutorProfile, addSubjectToTutor } from '../controllers/tutor.controller';
const tutorsRoutes = express.Router();

tutorsRoutes.route('/all').get(getAllTutors);
tutorsRoutes.route('/getTutorsBySubject/:id').get(getTutorsBySubject);
tutorsRoutes.route('/createTutorRequest').post(authorizeUserOnApiRequest, createTutorRequest);
tutorsRoutes.route('/getTutoringRequests').get(authorizeUserOnApiRequest, getTutoringRequests);
tutorsRoutes.route('/createTutorProfile').post(authorizeUserOnApiRequest, createTutorProfile)
tutorsRoutes.route('/addSubjectToTutor').post(authorizeUserOnApiRequest, addSubjectToTutor)

export default tutorsRoutes;