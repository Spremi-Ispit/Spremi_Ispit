// @ts-nocheck
import express from 'express';

import { loginUser } from './loginUser';
import { registerUser } from './registerUser';
import { registrationConfirm } from './registrationConfirm';

const router = express.Router();

loginUser(router);
registerUser(router);
registrationConfirm(router);

export default router;
