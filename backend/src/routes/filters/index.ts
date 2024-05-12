// @ts-nocheck
import express from 'express';
import { getYearsOfStudy } from './getYearsOfStudy';
import { getDepartment } from './getDepartment';
import { getType } from './getType';
import { getSubject } from './getSubject';
import { getYearOfExam } from './getYearOfExam';
import { getExaminationPeriod } from './getExaminationPeriod';

const filtersRoutes = express.Router();

filtersRoutes.route('/yearsOfStudy').get(getYearsOfStudy);
filtersRoutes.route('/department').get(getDepartment);
filtersRoutes.route('/type').get(getType);
filtersRoutes.route('/subject').get(getSubject);
filtersRoutes.route('/yearsOfExam').get(getYearOfExam);
filtersRoutes.route('/examinationPeriod').get(getExaminationPeriod);

export default filtersRoutes;
