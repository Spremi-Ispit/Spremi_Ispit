// @ts-nocheck
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import response from './response/index';

dotenv.config();

const tokenValidation = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token === 'undefined' || token === 'null') {
    const myResponse = response.BAD_REQUEST(`Token is undefined`);
    return res.status(myResponse.statusCode).send(myResponse);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      const myResponse = response.BAD_REQUEST(err.message);
      return res.status(myResponse.statusCode).send(myResponse);
    }

    req.body.userID = user.id;
    next();
  });
};

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

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (!err) {
      loggedStatus.status = true;
      loggedStatus.userID = user.id;
    }
  });
  return loggedStatus;
};

export default tokenValidation;
