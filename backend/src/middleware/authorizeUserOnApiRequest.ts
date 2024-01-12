// @ts-nocheck
import jwt from 'jsonwebtoken';
import env from '../config/env';
import { User } from '../entities/User';
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

    const user = await User.findOne({
      where: { email: decodedUser.email }
    });

    if (user.banned) {
      const myResponse = response.UNAUTHORIZED(`User is not authorized`);
      return res.status(myResponse.statusCode).send(myResponse);
    }

    req.body.userID = user.id;
    next();
  });
};
