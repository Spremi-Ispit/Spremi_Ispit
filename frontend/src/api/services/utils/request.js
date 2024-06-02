import axios from 'axios';
import axiosErrorLogger from './axiosErrorLogger';
import axiosErrorHandler from './axiosErrorHandler';

export default async function request(options) {
  try {
    const response = await axios.request(options);
    const axiosResData = response.data;
    return axiosResData.response;
  } catch (error) {
    axiosErrorLogger(error);
    axiosErrorHandler(error);
  }
}
