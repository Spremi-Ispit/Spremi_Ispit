// @ts-nocheck
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { instanceToPlain } from 'class-transformer';
import response from '../../utils/response/index';
import { validateEmail } from '../../utils/validation';
import { User } from '../../entities/User';

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
      const { password, id, ...jwtUser } = plainUser;
      const accessToken = jwt.sign(jwtUser, process.env.ACCESS_TOKEN_SECRET);

      return response.OK({
        token: accessToken,
        role: user.role,
        username: user.username,
        email: user.email
      });
    } else {
      return response.NOT_FOUND(`Wrong email or password`);
    }
  } else {
    return response.NOT_FOUND(`Wrong email or password`);
  }
};
