// @ts-nocheck
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import response from '../../utils/response/index';
import { validateEmail, validatePassword } from '../../utils/validation';
import { User } from '../../entities/User';
import { userRole } from '../../utils/enums';
import { loginUser } from './loginUser';
import { sendEmail } from '../../utils/nodemailer';

const now = () => Number(new Date());
const sec = 1000;
const min = 60 * sec;
const expirationTime = 10 * min;

const activactionRequests = [];

export const registerUser = async (req) => {
  const { email, password } = req.body;

  const emailError = await validateEmail(email);
  if (emailError) {
    return response.BAD_REQUEST(emailError);
  }

  const passwordError = await validatePassword(password);
  if (passwordError) {
    return response.BAD_REQUEST(passwordError);
  }

  const user = await User.findOne({
    where: { email }
  });

  if (user) {
    return response.BAD_REQUEST(`Email already exists`);
  }

  const uuid = uuidv4();
  activactionRequests.push({ email, activactionCode: uuid, password });

  setTimeout(async () => {
    const indexOfactivactionRequest = activactionRequests.findIndex(
      (request) => {
        return request.activactionCode === uuid;
      }
    );

    if (indexOfactivactionRequest !== -1) {
      activactionRequests.splice(indexOfactivactionRequest, 1);
    }
  }, expirationTime);

  try {
    sendEmail({
      to: email,
      subject: 'Registration process',
      text: `Use the following code to complete the registration. It will expire at: ${new Date(
        now() + expirationTime
      )}. \n Code: ${uuid} `
    });

    return response.OK(`Mail with the activaction code has been sent.`);
  } catch (err) {
    return response.BAD_REQUEST(`Mail delivery failed`);
  }
};

export const registrationConfirm = async (req) => {
  const { activactionCode } = req.body;

  const indexOfActivactionRequest = activactionRequests.findIndex((request) => {
    return request.activactionCode === activactionCode;
  });

  if (indexOfActivactionRequest === -1) {
    return response.BAD_REQUEST(`Bad request`);
  }

  const activactionRequest = activactionRequests.splice(
    indexOfActivactionRequest,
    1
  )[0];

  const { email, password } = activactionRequest;

  req.body.email = email;
  req.body.password = password;

  return await createUser(req, email, password);
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
