// @ts-nocheck
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import myUrlLogger from './src/utils/myUrlLogger';
import { initializeDatabase } from './src/utils/database';
import routes from './src/routes/index';

dotenv.config();
initializeDatabase();

const router = express();
router.use(cors());

router.use('/files', express.static('./files'));
router.use(bodyParser.json());
router.use(myUrlLogger);

router.listen(process.env.SERVER_PORT, () => {
  console.log(`Server je pokrenut!`);
});

router.use('/posts', routes.postsRoutes);
router.use('/upload', routes.uploadRoutes);
router.use('/tags', routes.tagsRoutes);
router.use('/auth', routes.authRoutes);
router.use('/comments', routes.commentsRoutes);
router.use('/users', routes.usersRoutes);
