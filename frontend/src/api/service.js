import axios from 'axios';
// import { SERVER_URL } from "@env";

const SERVER_URL = 'https://jsonplaceholder.typicode.com';

const METHOD = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
};

const axiosErrorLogger = (error) => {
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
};

const request = async (options, endpoint) => {
  try {
    const response = await axios.request({
      url: `${SERVER_URL}${endpoint}`,
      ...options,
    });

    return response.data;
  } catch (error) {
    axiosErrorLogger(error);
  }
};

const getRequest = async (endpoint) => {
  const options = {
    method: METHOD.get,
  };

  return await request(options, endpoint);
};

const postRequest = async (endpoint) => {
  const options = {
    method: METHOD.post,
  };

  return await request(options, endpoint);
};

const putRequest = async (endpoint) => {
  const options = {
    method: METHOD.put,
  };

  return await request(options, endpoint);
};

const deleteRequest = async (endpoint) => {
  const options = {
    method: METHOD.delete,
  };

  return await request(options, endpoint);
};

const services = {
  get: async (endpoint) => await getRequest(endpoint),
  post: async (endpoint, DTO) => await postRequest(endpoint, DTO),
  put: async (endpoint, DTO) => await putRequest(endpoint, DTO),
  delete: async (endpoint, DTO) => await deleteRequest(endpoint, DTO),
};

export default services;
