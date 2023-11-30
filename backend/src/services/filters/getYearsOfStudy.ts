// @ts-nocheck
import { YearOfStudy } from '../../entities/filters/YearOfStudy';
import response from '../../utils/response/index';

export const getYearsOfStudy = async (req) => {
  const years = await YearOfStudy.find();

  if (years) {
    return response.OK(years);
  } else {
    return response.OK(`No years found`);
  }
};
