import services from '../../../services';

export const getAllTagsRepository = async () => {
  const dto = await services.get('/tags');
  return dto.data;
};

export const createTagRepository = async (model) => {
  const dto = await services.post('/tags', model);
  return dto.data;
};

export const deleteTagRepository = async (tag) => {
  const { id } = tag;
  const dto = await services.delete(`/tags/${id}`);
  return parseInt(dto.data);
};
