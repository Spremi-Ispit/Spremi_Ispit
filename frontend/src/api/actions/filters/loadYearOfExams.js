import services from '../../services';

export const loadYearOfExams = async () => {
  return await services.get('/filters/yearsOfExam');
};
