// @ts-nocheck
import express from 'express';
import {
  getUsersAndLikes,
  getUsernamesWithRoles,
  updateUserRole,
  getUserByUsername,
  banUserAccount,
  unbanUserAccount,
  blacklistUserAccount,
  updatePassword,
  updateUsername
} from '../controllers/user.controller';
import { accountIsAdmin } from '../utils/accountRoleValidator';
import tokenValidation from '../utils/tokenValidation';

const usersRoutes = express.Router();

usersRoutes.route('/likes').get(getUsersAndLikes);
usersRoutes.route('/roles').get(getUsernamesWithRoles);
usersRoutes.route('/username/:username').get(getUserByUsername);
usersRoutes.route('/updatePassword').post(tokenValidation, updatePassword);
usersRoutes.route('/updateUsername').post(tokenValidation, updateUsername);

//ADMIN OPERATIONS
usersRoutes
  .route('/updateRole')
  .post(tokenValidation, accountIsAdmin, updateUserRole);
usersRoutes
  .route('/banUser')
  .post(tokenValidation, accountIsAdmin, banUserAccount);
usersRoutes
  .route('/unbanUser')
  .post(tokenValidation, accountIsAdmin, unbanUserAccount);
usersRoutes
  .route('/blacklistUser')
  .post(tokenValidation, accountIsAdmin, blacklistUserAccount);

export default usersRoutes;
