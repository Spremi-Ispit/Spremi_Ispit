// @ts-nocheck
import response from '../../utils/response/index';
import { ExaminationPeriod } from '../../entities/filters/ExaminationPeriod';

export const getExaminationPeriod = async (req) => {
  const examinationPeriod = await ExaminationPeriod.find();

  if (examinationPeriod) {
    return response.OK(examinationPeriod);
  } else {
    return response.OK('No tags found');
  }
};
