// @ts-nocheck
import services from '../services/index';
const { filtersServices } = services;

export const getYearsOfStudy = async (req, res) => {
  const response = await filtersServices.getYearsOfStudy(req);
  return res.status(response.statusCode).send(response);
};

export const getDepartment = async (req, res) => {
  const response = await filtersServices.getDepartment(req);
  return res.status(response.statusCode).send(response);
};

export const getSubject = async (req, res) => {
  const response = await filtersServices.getSubject(req);
  return res.status(response.statusCode).send(response);
};

export const getType = async (req, res) => {
  const response = await filtersServices.getType(req);
  return res.status(response.statusCode).send(response);
};

export const getYearOfExam = async (req, res) => {
  const response = await filtersServices.getYearOfExam(req);
  return res.status(response.statusCode).send(response);
};

export const getExaminationPeriod = async (req, res) => {
  const response = await filtersServices.getExaminationPeriod(req);
  return res.status(response.statusCode).send(response);
};
