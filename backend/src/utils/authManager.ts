// @ts-nocheck
import { User } from '../entities/User';
import jwt from 'jsonwebtoken';
import env from '../config/env';

export const checkIfLogged = (req) => {
  let loggedStatus = {
    status: false,
    userId: null
  };
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token === 'undefined' || token === 'null') {
    return loggedStatus;
  }

  jwt.verify(token, env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (!err) {
      loggedStatus.status = true;
      loggedStatus.userId = user.id;
    }
  });
  return loggedStatus;
};
