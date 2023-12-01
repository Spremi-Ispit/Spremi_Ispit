// @ts-nocheck
import { User } from '../entities/User';
import jwt from 'jsonwebtoken';
import env from '../config/env';

export const checkIfLogged = (req) => {
  let loggedStatus = {
    status: false,
    userID: null
  };
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token === 'undefined' || token === 'null') {
    return loggedStatus;
  }

  jwt.verify(token, env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (!err) {
      loggedStatus.status = true;
      loggedStatus.userID = user.id;
    }
  });
  return loggedStatus;
};

export const isBanned = async (email) => {
  let bannedStatus = {
    foundUser: true,
    banned: false
  };
  const user = await User.findOne({
    where: {
      email
    }
  });

  if (!user) {
    bannedStatus.foundUser = false;
    bannedStatus.banned = null;
    return bannedStatus;
  }

  bannedStatus.banned = user.banned;
  return bannedStatus;
};
