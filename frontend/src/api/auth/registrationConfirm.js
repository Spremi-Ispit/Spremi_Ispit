import services from '../../utils/services';

export const registrationConfirm = async (activactionCode) => {
  return await services.post('/auth/registrationConfirm', {
    activactionCode,
  });
};
