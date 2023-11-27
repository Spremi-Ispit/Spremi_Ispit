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

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
export const validatePassword = (password) => {
  return String(password)
    .toLowerCase()
    .match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
};
