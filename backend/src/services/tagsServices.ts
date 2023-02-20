// @ts-nocheck
import { Tag } from '../entities/Tag';
import response from '../utils/response/index';

export const getTags = async (req) => {
  const tags = await Tag.find();

  if (tags) {
    return response.OK(`Tags retrieved`, tags);
  } else {
    return response.OK(`No tags found`);
  }
};

export const createTag = async (req) => {
  const { tag } = req.body;

  const exists = await Tag.findOne({
    where: { tag: tag }
  });

  if (exists) {
    return response.BAD_REQUEST(`Tag exists`);
  }

  const newTag = Tag.create({
    tag
  });

  await newTag.save();
  return response.OK(`Tag created`, newTag);
};

export const deleteTag = async (req) => {
  const tagId = req.params.id;

  const tag = await Tag.findOne({
    where: { id: tagId }
  });

  await tag.remove();
  return response.OK(`Tag removed`, tagId);
};
