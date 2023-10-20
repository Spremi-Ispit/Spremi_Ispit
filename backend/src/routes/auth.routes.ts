// @ts-nocheck
import express from 'express';
import { loginUser, registerUser } from '../controllers/auth.controller';
import { authenticateUserOnLogin } from '../middleware/authenticateUserOnLogin';

const authRoutes = express.Router();

authRoutes.route('/login').post(authenticateUserOnLogin, loginUser);
authRoutes.route('/register').post(registerUser);

export default authRoutes;
