import axios from 'axios';
import { keys, localStorageManager } from '../managers/LocalStorageManager';
import env from '../../config/env';
import axiosErrorHandler from './utils/axiosErrorHandler';
import axiosErrorLogger from './utils/axiosErrorLogger';
import { Authorization } from './utils/Authorization';
import request from './utils/request';

const METHOD = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
};

const getRequest = async (endpoint) => {
  const options = {
    url: `${env.BACKEND_URL}${endpoint}`,
    method: METHOD.get,
    headers: {
      Authorization: Authorization(),
    },
    responseType: 'json',
  };

  return await request(options);
};

const postRequest = async (endpoint, DTO) => {
  const options = {
    url: `${env.BACKEND_URL}${endpoint}`,
    method: METHOD.post,
    headers: {
      Authorization: Authorization(),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    responseType: 'json',
    data: DTO,
  };

  return await request(options);
};

const putRequest = async (endpoint, DTO) => {
  const options = {
    url: `${env.BACKEND_URL}${endpoint}`,
    method: METHOD.put,
    headers: {
      Authorization: Authorization(),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    responseType: 'json',
    data: DTO,
  };

  return await request(options);
};

const deleteRequest = async (endpoint, DTO) => {
  const options = {
    url: `${env.BACKEND_URL}${endpoint}`,
    method: METHOD.delete,
    headers: {
      Authorization: Authorization(),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    responseType: 'json',
    data: DTO,
  };

  return await request(options);
};

const postFileRequest = async (endpoint, formData, setUploadProgress) => {
  const options = {
    url: `${env.BACKEND_URL}${endpoint}`,
    method: METHOD.post,
    headers: {
      Authorization: Authorization(),
      Accept: 'multipart/form-data',
    },
    responseType: 'json',
    data: formData,
    onUploadProgress: (progressEvent) => {
      const percentage = Math.floor(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      if (setUploadProgress) setUploadProgress(percentage);
    },
  };

  return await request(options);
};

const getVideoFile = async (url) => {
  // url: 'http://localhost:4000/files/1.mp4'

  try {
    const res = await axios(url, {
      responseType: 'blob',
    });

    // file doesn't use custom response object
    // no need for response.data.response;
    return URL.createObjectURL(res.data);
  } catch (error) {
    axiosErrorLogger(error);
    axiosErrorHandler(error);
  }
};

const services = {
  get: async (url) => await getRequest(url),
  post: async (url, DTO) => await postRequest(url, DTO),
  put: async (url, DTO) => await putRequest(url, DTO),
  delete: async (url, DTO) => await deleteRequest(url, DTO),
  postFile: async (url, formData, setUploadProgress) =>
    await postFileRequest(url, formData, setUploadProgress),
  getVideoFile: async (url) => await getVideoFile(url),
};

export default services;
