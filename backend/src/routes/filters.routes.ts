// @ts-nocheck
import express from 'express';
import {
  getDepartment,
  getYearsOfStudy,
  getType,
  getSubject,
  getYearOfExam,
  getExaminationPeriod
} from '../controllers/filters.controller';

const filtersRoutes = express.Router();

filtersRoutes.route('/yearsOfStudy').get(getYearsOfStudy);
filtersRoutes.route('/department').get(getDepartment);
filtersRoutes.route('/type').get(getType);
filtersRoutes.route('/subject').get(getSubject);
filtersRoutes.route('/yearsOfExam').get(getYearOfExam);
filtersRoutes.route('/examinationPeriod').get(getExaminationPeriod);

export default filtersRoutes;
