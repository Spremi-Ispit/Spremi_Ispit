// @ts-nocheck
import express from 'express';
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

const router = express.Router();

getUsersAndLikes(router);
getUsernamesWithRoles(router);
getUserByUsername(router);
updatePassword(router);
updateUsername(router);
resetPassword(router);
resetPasswordConfirm(router);

// ------------------ADMIN----------------------
updateUserRole(router);
banUserAccount(router);
unbanUserAccount(router);
blacklistUserAccount(router);

export default router;
