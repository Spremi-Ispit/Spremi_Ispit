// @ts-nocheck
import { YearOfStudy } from '../../entities/filters/YearOfStudy';
import { Department } from '../../entities/filters/Department';
import response from '../../utils/response/index';

export const getDepartment = async (req) => {
  const { yearOfStudy } = req.query;

  const selectedYearOfStudy = await YearOfStudy.find({
    where: {
      name: yearOfStudy
    }
  });

  const departments = await Department.find({
    where: {
      yearsOfStudy: selectedYearOfStudy
    }
  });

  if (departments) {
    return response.OK(departments);
  } else {
    return response.OK('No departmens found');
  }
};
