// @ts-nocheck
import services from '../services/index';
const { postServices } = services;

export const getPostsByUsername = async (req, res) => {
  const response = await postServices.getPostsByUsername(req);
  return res.status(response.statusCode).send(response);
};

export const getPostById = async (req, res) => {
  const response = await postServices.getPostById(req);
  return res.status(response.statusCode).send(response);
};

export const createPost = async (req, res) => {
  const response = await postServices.createPost(req);
  return res.status(response.statusCode).send(response);
};

export const deletePost = async (req, res) => {
  const response = await postServices.deletePost(req);
  return res.status(response.statusCode).send(response);
};

export const getPostsForHomepageFilters = async (req, res) => {
  const response = await postServices.getPostsForHomepageFilters(req);
  return res.status(response.statusCode).send(response);
};

export const createPostLike = async (req, res) => {
  const response = await postServices.createPostLike(req);
  return res.status(response.statusCode).send(response);
};

export const deletePostLike = async (req, res) => {
  const response = await postServices.deletePostLike(req);
  return res.status(response.statusCode).send(response);
};

export const createPostDislike = async (req, res) => {
  const response = await postServices.createPostDislike(req);
  return res.status(response.statusCode).send(response);
};

export const deletePostDislike = async (req, res) => {
  const response = await postServices.deletePostDislike(req);
  return res.status(response.statusCode).send(response);
};

export const reportPost = async (req, res) => {
  const response = await postServices.reportPost(req);
  return res.status(response.statusCode).send(response);
};

export const getReportedPosts = async (req, res) => {
  const response = await postServices.getReportedPosts(req);
  return res.status(response.statusCode).send(response);
};

export const dismissReport = async (req, res) => {
  const response = await postServices.dismissReport(req);
  return res.status(response.statusCode).send(response);
};

export const getCommentedPosts = async (req, res) => {
  const response = await postServices.getCommentedPosts(req);
  return res.status(response.statusCode).send(response);
};
