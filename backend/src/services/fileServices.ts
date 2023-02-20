// @ts-nocheck
import path from 'path';
import response from '../utils/response/index';
import fs from 'fs';
import { PostFile } from '../entities/PostFile';
import { CommentFile } from '../entities/CommentFile';
import { Post } from '../entities/Post';
import { Comment } from '../entities/Comment';

const directoryName = {
  comments: 'comments',
  posts: 'posts'
};
const createFilePath = (filename) => {
  return path.join(__dirname, '../..', 'files', filename);
};

export const uploadPostFile = async (req) => {
  const postId = req.body.postId;
  return await uploadFile(req, PostFile, postId, directoryName.posts);
};

export const uploadCommentFile = async (req) => {
  const commentId = req.body.commentId;
  return await uploadFile(req, CommentFile, commentId, directoryName.comments);
};

async function insertFileInfoIntoTable(entity, filepath, ext, id) {
  const propertyType = entity === typeof PostFile ? 'post' : 'comment';
  const entityType = entity === typeof PostFile ? Post : Comment;

  const fileEntity = entity.create({
    filepath,
    ext,
    [propertyType]: await entityType.findOneBy(id)
  });
  await fileEntity.save();
}

async function uploadFile(req, entity, id, directory) {
  const files = req.files;

  Object.keys(files).forEach((key) => {
    const file = files[key];
    const uniqueFileName = `${directory}/${id}/${file.name}`;
    const filepath = createFilePath(uniqueFileName);
    const ext = '.' + file.mimetype.split('/')[1];

    files[key].mv(filepath, async (err) => {
      if (err) {
        return response.INTERNAL_SERVER_ERROR(
          `An unexpected error occured`,
          err
        );
      } else {
        return await insertFileInfoIntoTable(entity, uniqueFileName, ext, id);
      }
    });
  });

  return response.OK('Files uploaded');
}

async function removeFiles(id, directory) {
  const path = `files/${directory}/${id}`;

  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true });
  }
}

export async function removePostFiles(id) {
  await removeFiles(id, directoryName.posts);
}

export async function removeCommentFiles(id) {
  await removeFiles(id, directoryName.comments);
}

//******************SERVICE FOR DOWNLOADING FILE DIRECTLY FROM SERVER*********************/
// export const getFile = async (req, res) => {
//   const fileName = req.params.fileName;
//   const filePath = './' + process.env.SERVER_STORAGE + fileName; //"./files/1630585050554.docx"
//   // let file = fs.createReadStream(filePath);
//   // file.pipe(res);
//   res.download(filePath); //this is the same as previous two lines
// };
