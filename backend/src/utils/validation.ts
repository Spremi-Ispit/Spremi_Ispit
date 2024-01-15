// @ts-nocheck
import * as Yup from 'yup';

export const validateEmail = async (email) => {
  const schema = Yup.object({
    email: Yup.string().email().required()
  });

  try {
    await schema.validate({ email });
    return null;
  } catch (err) {
    return err.errors[0];
  }
};

export const validatePassword = async (password) => {
  const schema = Yup.object({
    password: Yup.string()
      .matches(/[A-Z]/, 'password must contain at least 1 uppercase letter')
      .matches(/[a-z]/, 'password must contain at least 1 lowercase letter')
      .matches(/\d/, 'password must contain at least 1 number')
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        'password must contain at least 1 special character'
      )
      .min(8, 'password must contain 8 or more characters')
      .required()
  });

  try {
    await schema.validate({ password });
    return null;
  } catch (err) {
    return err.errors[0];
  }
};
