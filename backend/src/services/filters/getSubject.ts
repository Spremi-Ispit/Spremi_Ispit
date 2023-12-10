// @ts-nocheck
import { YearOfStudy } from '../../entities/filters/YearOfStudy';
import { Department } from '../../entities/filters/Department';
import { Subject } from '../../entities/filters/Subject';
import response from '../../utils/response/index';

export const getSubject = async (req) => {
  const { yearOfStudy, department } = req.query;

  const selectedYearOfStudy = await YearOfStudy.find({
    where: {
      name: yearOfStudy
    }
  });

  const selectedDepartment = await Department.find({
    where: {
      name: department
    }
  });

  const subjects = await Subject.find({
    where: {
      yearsOfStudy: selectedYearOfStudy,
      departments: selectedDepartment
    }
  });

  if (subjects) {
    return response.OK(subjects);
  } else {
    return response.OK('No subjects found');
  }
};
