import axios from 'axios';
import { axiosErrorLoger } from '../utils/axiosErrorLogger';

const request = async (method, url, DTO, formData, setUploadProgress) => {
  const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('app')).token;

  const headers = {
    Authorization: bearer,
    Accept: DTO ? 'application/json' : 'multipart/form-data',
    ...(DTO && { 'Content-Type': 'application/json' }),
  };

  try {
    const res = await axios({
      method: method,
      responseType: 'json', // if there would be a need to download files, responseType would be a 'blob'
      url: process.env.REACT_APP_BASE_URL + url,
      ...(DTO && { data: DTO }),
      ...(formData && { data: formData }),
      headers,
      onUploadProgress: (progressEvent) => {
        const percentage = Math.floor(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        if (setUploadProgress) setUploadProgress(percentage);
      },
    });
    return res.data;
  } catch (error) {
    axiosErrorLoger(error);
    if (error.response) {
      throw new Error(
        `Request made, but the server responded with an error: ${error.response.data.message}.`
      );
    } else if (error.request) {
      throw new Error(
        `Request made but no response is received from the server. `
      );
    } else {
      throw new Error(`Error occured while setting up the request`);
    }
  }
};

const getVideoFile = async (url) => {
  // url: 'http://localhost:4000/files/1.mp4'

  try {
    const res = await axios(url, {
      responseType: 'blob',
    });
    return URL.createObjectURL(res.data);
  } catch (error) {
    axiosErrorLoger(error);
    if (error.response) {
      throw new Error(
        `Request made, but the server responded with an error: ${error.response.data.message}.`
      );
    } else if (error.request) {
      throw new Error(
        `Request made but no response is received from the server. `
      );
    } else {
      throw new Error(`Error occured while setting up the request`);
    }
  }
};

const method = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
};

const services = {
  get: async (url) => await request(method.get, url),
  post: async (url, DTO) => await request(method.post, url, DTO),
  put: async (url, DTO) => await request(method.put, url, DTO),
  delete: async (url, DTO) => await request(method.delete, url, DTO),
  postFile: async (url, formData, setUploadProgress) =>
    await request(method.post, url, undefined, formData, setUploadProgress),
  getVideoFile: async (url) => await getVideoFile(url),
};

export default services;
