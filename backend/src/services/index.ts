// @ts-nocheck
import * as postServices from './post';
import * as commentServices from './comment';
import * as authServices from './auth';
import * as filtersServices from './filters';
import * as fileServices from './file';
import * as userServices from './user';
import * as tutorServices from './tutor';

const services = {
  postServices,
  commentServices,
  authServices,
  fileServices,
  userServices,
  filtersServices,
  tutorServices
};

export default services;
