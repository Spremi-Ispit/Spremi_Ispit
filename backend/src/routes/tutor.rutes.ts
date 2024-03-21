import express from 'express';

import { getAllTutors } from '../controllers/tutor.controller';

const tutorsRoutes = express.Router();

tutorsRoutes.route('/all').get(getAllTutors);

export default tutorsRoutes;