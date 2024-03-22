import express from 'express';

import { getAllTutors, getTutorsBySubject } from '../controllers/tutor.controller';
const tutorsRoutes = express.Router();

tutorsRoutes.route('/all').get(getAllTutors);
tutorsRoutes.route('/getTutorsBySubject/:id').get(getTutorsBySubject);

export default tutorsRoutes;