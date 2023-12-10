import services from '../../utils/services';

export const loadExaminationPeriods = async () => {
  return await services.get('/filters/examinationPeriod');
};
