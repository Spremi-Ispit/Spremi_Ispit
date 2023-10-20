import services from '../../utils/services';

export const loadYearOfExams = async () => {
  return await services.get('/filters/yearsOfExam');
};
