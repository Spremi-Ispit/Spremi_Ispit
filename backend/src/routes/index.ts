// @ts-nocheck
import postsRoutes from './posts.routes';
import uploadRoutes from './file.routes';
import filtersRoutes from './filters.routes';
import authRoutes from './auth.routes';
import commentsRoutes from './comments.routes';
import usersRoutes from './users.routes';

const routes = {
  postsRoutes,
  uploadRoutes,
  filtersRoutes,
  authRoutes,
  commentsRoutes,
  usersRoutes
};

export default routes;
