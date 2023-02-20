// @ts-nocheck
import * as postServices from './postServices';
import * as tagsServices from './tagsServices';
import * as authServices from './authServices';
import * as fileServices from './fileServices';
import * as commentServices from './commentServices';
import * as postLikedByServices from './postLikedByServices';
import * as postDislikedByServices from './postDislikedByServices';
import * as commentLikedByServices from './commentLikedByServices';
import * as commentDislikedByServices from './commentDislikedByServices';
import * as userServices from './userServices';

const services = {
  postServices,
  tagsServices,
  authServices,
  fileServices,
  commentServices,
  postLikedByServices,
  postDislikedByServices,
  commentLikedByServices,
  commentDislikedByServices,
  userServices
};

export default services;
