// @ts-nocheck
import services from '../services/index';
const { userServices } = services;

export const getUsersAndLikes = async (req, res) => {
  const response = await userServices.getUsersAndLikes(req);
  return res.status(response.statusCode).send(response);
};

export const getUsernamesWithRoles = async (req, res) => {
  const response = await userServices.getUsernamesWithRoles(req);
  return res.status(response.statusCode).send(response);
};

export const updateUserRole = async (req, res) => {
  const response = await userServices.updateUserRole(req);
  return res.status(response.statusCode).send(response);
};

export const getUserByUsername = async (req, res) => {
  const response = await userServices.getUserByUsername(req);
  return res.status(response.statusCode).send(response);
};
export const banUserAccount = async (req, res) => {
  const response = await userServices.banUserAccount(req);
  return res.status(response.statusCode).send(response);
};
export const unbanUserAccount = async (req, res) => {
  const response = await userServices.unbanUserAccount(req);
  return res.status(response.statusCode).send(response);
};
export const blacklistUserAccount = async (req, res) => {
  const response = await userServices.blacklistUserAccount(req);
  return res.status(response.statusCode).send(response);
};

export const updatePassword = async (req, res) => {
  const response = await userServices.updatePassword(req);
  return res.status(response.statusCode).send(response);
};

export const updateUsername = async (req, res) => {
  const response = await userServices.updateUsername(req);
  return res.status(response.statusCode).send(response);
};
