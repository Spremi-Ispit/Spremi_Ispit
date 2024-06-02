// @ts-nocheck
import jwt from 'jsonwebtoken';
import env from '../config/env';
import response from '../utils/response';

export const authorizeUserOnApiRequest = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    const myResponse = response.BAD_REQUEST(`authorization header is missing`);
    return res.status(myResponse.statusCode).send(myResponse);
  }

  const token = authHeader && authHeader.split(' ')[1];

  if (token === 'undefined' || token === 'null') {
    const myResponse = response.BAD_REQUEST(`Token is undefined`);
    return res.status(myResponse.statusCode).send(myResponse);
  }

  jwt.verify(token, env.ACCESS_TOKEN_SECRET, async (err, decodedUser) => {
    if (err) {
      const myResponse = response.BAD_REQUEST(err.message);
      return res.status(myResponse.statusCode).send(myResponse);
    }

    if (decodedUser.banned) {
      const myResponse = response.UNAUTHORIZED(`User is banned`);
      return res.status(myResponse.statusCode).send(myResponse);
    }

    req.body.userId = decodedUser.id;
    next();
  });
};
