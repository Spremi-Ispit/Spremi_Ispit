// @ts-nocheck
import { errorLogger } from '../errorLogger';
import HttpStatus from './httpStatus';

class Response {
  constructor(statusCode, httpStatus, response) {
    this.timeStamp = new Date().toLocaleString();
    this.statusCode = statusCode;
    this.httpStatus = httpStatus;
    this.response = response;
  }
}

export const response = {
  OK: (...args) =>
    new Response(HttpStatus.OK.code, HttpStatus.OK.status, ...args),

  CREATED: (...args) =>
    new Response(HttpStatus.CREATED.code, HttpStatus.CREATED.status, ...args),

  NOT_FOUND: (...args) =>
    new Response(
      HttpStatus.NOT_FOUND.code,
      HttpStatus.NOT_FOUND.status,
      ...args
    ),

  UNAUTHORIZED: (...args) =>
    new Response(
      HttpStatus.UNAUTHORIZED.code,
      HttpStatus.UNAUTHORIZED.status,
      ...args
    ),

  BAD_REQUEST: (...args) =>
    new Response(
      HttpStatus.BAD_REQUEST.code,
      HttpStatus.BAD_REQUEST.status,
      ...args
    ),

  INTERNAL_SERVER_ERROR: (...args) => {
    errorLogger(args);

    return new Response(
      HttpStatus.INTERNAL_SERVER_ERROR.code,
      HttpStatus.INTERNAL_SERVER_ERROR.status,
      ...args
    );
  }
};

export default response;
