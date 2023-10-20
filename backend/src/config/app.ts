// @ts-nocheck
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../routes';
import env from './env';
import apiLogger from '../middleware/apiLogger';

const app = express();
app.use(cors());

app.use('/backend/files', express.static(env.SERVER_STORAGE));
app.use(bodyParser.json());
app.use(apiLogger);

app.use('/backend/posts', routes.postsRoutes);
app.use('/backend/upload', routes.uploadRoutes);
app.use('/backend/auth', routes.authRoutes);
app.use('/backend/comments', routes.commentsRoutes);
app.use('/backend/users', routes.usersRoutes);
app.use('/backend/filters', routes.filtersRoutes);

app.get('/backend/ping', (req, res) => {
  res.send(env.NODE_ENV);
});

export const createApp = () => app;
