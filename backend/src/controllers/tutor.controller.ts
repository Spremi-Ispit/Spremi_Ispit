// @ts-nocheck
import services from "../services";
const {tutorServices} = services;

export const getAllTutors = async (req, res)=>{
    const response = await tutorServices.getAllTutors(req);
    return res.status(response.statusCode).send(response)
};
export const getTutorsBySubject = async (req, res)=>{
    const response = await tutorServices.getTutorsBySubject(req);
    return res.status(response.statusCode).send(response);
}