import services from '../../../services/index';

export const getAllTagsRepository = async () => {
  const dto = await services.get('/tags');
  return dto.data;
};
