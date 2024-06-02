import services from '../../services';

export const loadExaminationPeriods = async () => {
  return await services.get('/filters/examinationPeriod');
};
