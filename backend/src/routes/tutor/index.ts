import express from 'express';
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import { getTutorByUserId } from './getTutorByUserId';
import { getTutorSubjects } from './getTutorSubjects';
import { getTutors } from './getTutors';
import { getTutorsBySubject } from './getTutorsBySubject';
import { createTutorRequest } from './createTutorRequest';
import { getTutoringRequests } from './getTutoringRequests';
import { getTutoringRequestsStudent } from './getTutoringRequestsStudent';
import { createTutorProfile } from './createTutorProfile';
import { createTutorRequestMessage } from './createTutorRequestMessage';
import { updateTutorProfile } from './updateTutorProfile';
import { deleteTutorProfile } from './deleteTutorProfile';
import { addSubjectToTutor } from './addSubjectToTutor';
import { deleteSubjectFromTutor } from './deleteSubjectFromTutor';

const tutorsRoutes = express.Router();

tutorsRoutes
  .route('/getTutorByUserId')
  .get(authorizeUserOnApiRequest, getTutorByUserId);

tutorsRoutes
  .route('/getTutorSubjects')
  .get(authorizeUserOnApiRequest, getTutorSubjects);

tutorsRoutes.route('/getTutors').get(getTutors);

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
  .route('/createTutorRequestMessage')
  .post(authorizeUserOnApiRequest, createTutorRequestMessage);

tutorsRoutes
  .route('/updateTutorProfile')
  .put(authorizeUserOnApiRequest, updateTutorProfile);

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
