import express from 'express';

import { getAllTutors } from '../controllers/tutor.controller';

const tutorRoutes = express.Router();

tutorRoutes.route('all').get(getAllTutors);

export default tutorRoutes;