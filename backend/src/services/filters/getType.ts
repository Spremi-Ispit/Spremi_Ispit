// @ts-nocheck
import { Type } from '../../entities/filters/Type';
import response from '../../utils/response/index';

export const getType = async (req) => {
  const type = await Type.find();

  if (type) {
    return response.OK(type);
  } else {
    return response.OK('No tags found');
  }
};
