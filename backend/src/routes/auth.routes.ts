// @ts-nocheck
import express from 'express';
import { loginUser, registerUser } from '../controllers/auth.controller';
import { accountBanned } from '../utils/accountStatusValidator';

const authRoutes = express.Router();

authRoutes.route('/login').post(accountBanned, loginUser);
authRoutes.route('/register').post(registerUser);

export default authRoutes;
