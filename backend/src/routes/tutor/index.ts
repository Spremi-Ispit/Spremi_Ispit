import express from 'express';
import { getTutorById } from './getTutorById';
import { getTutorSubjects } from './getTutorSubjects';
import { getTutors } from './getTutors';
import { getTutorsBySubject } from './getTutorsBySubject';
import { createTutorProfile } from './createTutorProfile';
import { updateTutorProfile } from './updateTutorProfile';
import { deleteTutorProfile } from './deleteTutorProfile';
import { addSubjectToTutor } from './addSubjectToTutor';
import { deleteSubjectFromTutor } from './deleteSubjectFromTutor';

const router = express.Router();

getTutorById(router);
getTutorSubjects(router);
getTutors(router);
getTutorsBySubject(router);
createTutorProfile(router);
updateTutorProfile(router);
deleteTutorProfile(router);
addSubjectToTutor(router);
deleteSubjectFromTutor(router);

export default router;
