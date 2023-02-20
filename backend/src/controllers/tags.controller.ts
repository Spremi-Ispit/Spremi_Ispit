// @ts-nocheck
import services from '../services/index';
const { tagsServices } = services;

export const getTags = async (req, res) => {
  const response = await tagsServices.getTags(req);
  return res.status(response.statusCode).send(response);
};

export const createTag = async (req, res) => {
  const response = await tagsServices.createTag(req);
  return res.status(response.statusCode).send(response);
};

export const deleteTag = async (req, res) => {
  const response = await tagsServices.deleteTag(req);
  return res.status(response.statusCode).send(response);
};
