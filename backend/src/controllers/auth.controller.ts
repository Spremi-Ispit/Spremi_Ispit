// @ts-nocheck
import services from '../services/index';
const { authServices } = services;

export const loginUser = async (req, res) => {
  const response = await authServices.loginUser(req);
  return res.status(response.statusCode).send(response);
};

export const registerUser = async (req, res) => {
  const response = await authServices.registerUser(req);
  return res.status(response.statusCode).send(response);
};

export const registrationConfirm = async (req, res) => {
  const response = await authServices.registrationConfirm(req);
  return res.status(response.statusCode).send(response);
};
