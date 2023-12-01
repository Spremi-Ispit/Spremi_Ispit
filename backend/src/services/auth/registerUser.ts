// @ts-nocheck
import bcrypt from 'bcrypt';
import response from '../../utils/response/index';
import { validateEmail } from '../../utils/validation';
import { User } from '../../entities/User';
import { userRole } from '../../utils/enums';
import { loginUser } from './loginUser';

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

//-----------------HELPER----------------

async function createUser(req, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const count = await User.count();

  const username = `user${count + 1}`;
  const user = User.create({
    username,
    email,
    password: hashedPassword,
    role: userRole.visitor
  });
  await user.save();
  return await loginUser(req);
}
