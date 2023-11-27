// @ts-nocheck
import response from '../../utils/response/index';
import { YearOfExam } from '../../entities/filters/YearOfExam';

export const getYearOfExam = async (req) => {
  const yearOfExame = await YearOfExam.find();

  if (yearOfExame) {
    return response.OK('YearOfExamp retrived', yearOfExame);
  } else {
    return response.OK('No tags found');
  }
};
