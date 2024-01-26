import axios from 'axios';
import { keys, localStorageManager } from '../managers/LocalStorageManager';
import env from '../../config/env';

const request = async (method, url, DTO, formData, setUploadProgress) => {
  const app = localStorageManager.getState(keys.app);
  const token = app ? app.token : undefined;

  const bearer = 'Bearer ' + token;

  const headers = {
    Authorization: bearer,
    Accept: DTO ? 'application/json' : 'multipart/form-data',
    ...(DTO && { 'Content-Type': 'application/json' }),
  };

  try {
    const res = await axios({
      method: method,
      responseType: 'json', // if there would be a need to download files, responseType would be a 'blob'
      url: env.BACKEND_URL + url,
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

    const axiosResData = res.data;
    return axiosResData.response;
  } catch (error) {
    axiosErrorLoger(error);
    if (error.response) {
      if (error.response.status === 401) {
        //FORCE LOGOUT:
        //used to logout unauthorized user that is trying to set up
        //a request that is allowed only for authorized user
        //e.g banned user is trying to make an api request
        localStorage.clear();
        location.reload();
      }

      throw new Error(
        `Request made, but the server responded with an error: ${error.response.data.response}.`
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
        `Request made, but the server responded with an error: ${error.response.data.response}.`
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

function axiosErrorLoger(error) {
  if (error.response) {
    console.log(
      `Request made, but the server responded with an error, check response.data `,
      error
    );
  } else if (error.request) {
    console.log(
      `Request made but no response is received from the server, check response.request `,
      error
    );
  } else {
    console.log(`Error occured while setting up the request `, error);
  }
}

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
