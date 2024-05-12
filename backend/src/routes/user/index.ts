// @ts-nocheck
import express from 'express';
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import { authorizeAdminOnApiRequest } from '../../middleware/authorizeAdminOnApiRequest';
import { getUsersAndLikes } from './getUsersAndLikes';
import { getUsernamesWithRoles } from './getUsernamesWithRoles';
import { getUserByUsername } from './getUserByUsername';
import { updatePassword } from './updatePassword';
import { updateUsername } from './updateUsername';
import { resetPassword } from './resetPassword';
import { resetPasswordConfirm } from './resetPasswordConfirm';
import { updateUserRole } from './updateUserRole';
import { banUserAccount } from './banUserAccount';
import { unbanUserAccount } from './unbanUserAccount';
import { blacklistUserAccount } from './blacklistUserAccount';

const usersRoutes = express.Router();

// usersRoutes.route('/likes').get(authorizeUserOnApiRequest, getUsersAndLikes);
usersRoutes.route('/likes').get(getUsersAndLikes);

usersRoutes
  .route('/roles')
  .get(authorizeUserOnApiRequest, getUsernamesWithRoles);

usersRoutes
  .route('/username/:username')
  .get(authorizeUserOnApiRequest, getUserByUsername);

usersRoutes
  .route('/updatePassword')
  .post(authorizeUserOnApiRequest, updatePassword);

usersRoutes
  .route('/updateUsername')
  .post(authorizeUserOnApiRequest, updateUsername);

usersRoutes.route('/resetPassword').post(resetPassword);

usersRoutes.route('/resetPasswordConfirm').post(resetPasswordConfirm);

// ------------------ADMIN OPERATIONS----------------------
usersRoutes
  .route('/updateRole')
  .post(authorizeAdminOnApiRequest, updateUserRole);

usersRoutes.route('/banUser').post(authorizeAdminOnApiRequest, banUserAccount);
usersRoutes
  .route('/unbanUser')
  .post(authorizeAdminOnApiRequest, unbanUserAccount);
usersRoutes
  .route('/blacklistUser')
  .post(authorizeAdminOnApiRequest, blacklistUserAccount);

export default usersRoutes;
