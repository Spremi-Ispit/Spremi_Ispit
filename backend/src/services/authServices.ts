// @ts-nocheck
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import response from '../utils/response/index';
import { validateEmail, validatePassword } from '../utils/authValidation';
import { User } from '../entities/User';
import { userRole } from '../utils/enums';
import { instanceToPlain } from 'class-transformer';

export const loginUser = async (req) => {
  const { email, password } = req.body;
  if (validateEmail(email) === null) {
    return response.BAD_REQUEST(`Not a valid email address`);
  }

  const user = await User.findOne({
    where: { email }
  });
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      const plainUser = instanceToPlain(user);
      const accessToken = jwt.sign(plainUser, process.env.ACCESS_TOKEN_SECRET);
      return response.OK(`User retrieved`, {
        token: accessToken,
        role: user.role,
        username: user.username
      });
    } else {
      return response.NOT_FOUND(`Wrong email or password`);
    }
  } else {
    return response.NOT_FOUND(`Wrong email or password`);
  }
};

export const registerUser = async (req) => {
  const { email, password } = req.body;

  if (validateEmail(email) === null) {
    return response.BAD_REQUEST(`Not a valid email address`);
  }

  // if (validatePassword(password) === null) {
  //   return response.BAD_REQUEST(`Not a valid password format`);
  // }

  const user = await User.findOne({
    where: { email }
  });

  if (!user) {
    return await createUser(req, email, password);
  } else {
    return response.OK(`Email already in use`);
  }
};

async function createUser(req, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const username = uuidv4();

  const user = User.create({
    username,
    email,
    password: hashedPassword,
    role: userRole.visitor
  });

  await user.save();
  return await loginUser(req);
}
