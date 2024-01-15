import services from '../../utils/services';

export const registrationConfirm = async (email, activactionCode) => {
  return await services.post('/auth/registrationConfirm', {
    email,
    activactionCode,
  });
};
