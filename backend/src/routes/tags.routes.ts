// @ts-nocheck
import express from 'express';
import { getTags, createTag, deleteTag } from '../controllers/tags.controller';

const tagsRoutes = express.Router();

tagsRoutes.route('/').get(getTags).post(createTag);
tagsRoutes.route('/:id').delete(deleteTag);

export default tagsRoutes;
