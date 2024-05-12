// @ts-nocheck
import express from 'express';

import { authenticateUserOnLogin } from '../../middleware/authenticateUserOnLogin';
import { loginUser } from './loginUser';
import { registerUser } from './registerUser';
import { registrationConfirm } from './registrationConfirm';

const authRoutes = express.Router();

authRoutes.route('/login').post(authenticateUserOnLogin, loginUser);
authRoutes.route('/register').post(registerUser);
authRoutes.route('/registrationConfirm').post(registrationConfirm);

export default authRoutes;
