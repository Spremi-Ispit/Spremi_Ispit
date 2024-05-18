// @ts-nocheck
import express from 'express';
import { getYearsOfStudy } from './getYearsOfStudy';
import { getDepartment } from './getDepartment';
import { getType } from './getType';
import { getSubject } from './getSubject';
import { getYearOfExam } from './getYearOfExam';
import { getExaminationPeriod } from './getExaminationPeriod';

const router = express.Router();

getYearsOfStudy(router);
getDepartment(router);
getType(router);
getSubject(router);
getYearOfExam(router);
getExaminationPeriod(router);

export default router;
