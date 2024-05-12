// @ts-nocheck
import services from '../../services/index';
import fileUploadMiddleware from '../../middleware/fileUpload';
const { fileServices } = services;

export const uploadCommentFile = (router) =>
  router.route('/comment').post(fileUploadMiddleware, async (req, res) => {
    const response = await fileServices.uploadCommentFile(req);
    return res.status(response.statusCode).send(response);
  });
