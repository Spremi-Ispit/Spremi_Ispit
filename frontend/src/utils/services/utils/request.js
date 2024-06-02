import axios from 'axios';
import axiosErrorLogger from './axiosErrorLogger';

export default async function request(options) {
  try {
    const response = await axios.request(options);
    const axiosResData = response.data;
    return axiosResData.response;
  } catch (error) {
    axiosErrorLogger(error);
  }
}
