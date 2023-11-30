// @ts-nocheck
import path from 'path';
import response from '../../../utils/response/index';
import { PostFile } from '../../../entities/PostFile';
import { CommentFile } from '../../../entities/CommentFile';
import { Post } from '../../../entities/Post';
import { Comment } from '../../../entities/Comment';
import env from '../../../config/env';

export const directoryName = {
  comments: 'comments',
  posts: 'posts'
};

async function insertFileInfoIntoTable(directory, filepath, ext, id) {
  const propertyType = directory === directoryName.posts ? 'post' : 'comment';
  const entityType = directory === directoryName.posts ? Post : Comment;
  const entity = directory === directoryName.posts ? PostFile : CommentFile;

  const fileEntity = entity.create({
    path: filepath,
    ext,
    [propertyType]: await entityType.findOne({
      where: { id: id }
    })
  });

  await fileEntity.save();
}

function getExtension(file) {
  const ext = '.' + file.mimetype.split('/')[1];

  if (ext === '.plain') return '.txt';

  return ext;
}

export async function uploadFile(req, id, directory) {
  const files = req.files;
  Object.keys(files).forEach((key) => {
    const file = files[key];
    const uniqueFileName = `${directory}/${id}/${file.name}`;
    const filepath = path.join(env.SERVER_STORAGE, uniqueFileName);

    const ext = getExtension(file);

    files[key].mv(filepath, async (err) => {
      if (err) {
        return response.INTERNAL_SERVER_ERROR(
          `An unexpected error occured: ${err}`
        );
      } else {
        return await insertFileInfoIntoTable(
          directory,
          uniqueFileName,
          ext,
          id
        );
      }
    });
  });

  return response.OK('Files uploaded');
}
