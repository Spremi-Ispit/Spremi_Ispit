// @ts-nocheck
import services from '../services';
const { tutorServices } = services;

export const getTutorByUserId = async (req, res) => {
  const response = await tutorServices.getTutorByUserId(req);
  return res.status(response.statusCode).send(response);
};

export const getTutorSubjects = async (req, res) => {
  const response = await tutorServices.getTutorSubjects(req);
  return res.status(response.statusCode).send(response);
};

export const getTutors = async (req, res) => {
  const response = await tutorServices.getTutors(req);
  return res.status(response.statusCode).send(response);
};

export const getTutorsBySubject = async (req, res) => {
  const response = await tutorServices.getTutorsBySubject(req);
  return res.status(response.statusCode).send(response);
};

export const createTutorRequest = async (req, res) => {
  const response = await tutorServices.createTutorRequest(req);
  return res.status(response.statusCode).send(response);
};

export const getTutoringRequests = async (req, res) => {
  const response = await tutorServices.getTutoringRequests(req);
  return res.status(response.statusCode).send(response);
};
export const getTutoringRequestsStudent = async (req, res) => {
  const response = await tutorServices.getTutoringRequestsStudent(req);
  return res.status(response.statusCode).send(response);
};

export const createTutorProfile = async (req, res) => {
  const response = await tutorServices.createTutorProfile(req);
  return res.status(response.statusCode).send(response);
};

export const addSubjectToTutor = async (req, res) => {
  const response = await tutorServices.addSubjectToTutor(req);
  return res.status(response.statusCode).send(response);
};

export const deleteTutorProfile = async (req, res) => {
  const response = await tutorServices.deleteTutorProfile(req);
  return res.status(response.statusCode).send(response);
};

export const deleteSubjectFromTutor = async (req, res) => {
  const response = await tutorServices.deleteSubjectFromTutor(req);
  return res.status(response.statusCode).send(response);
};

export const updateTutorProfile = async (req, res) => {
  const response = await tutorServices.updateTutorProfile(req);
  return res.status(response.statusCode).send(response);
};

export const createTutorRequestMessage = async (req, res) => {
  const response = await tutorServices.createTutorRequestMessage(req);
  return res.status(response.statusCode).send(response);
};
