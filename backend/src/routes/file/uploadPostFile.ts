// @ts-nocheck
import services from '../../services/index';
import fileUploadMiddleware from '../../middleware/fileUpload';
const { fileServices } = services;

export const uploadPostFile = (router) =>
  router.route('/post').post(fileUploadMiddleware, async (req, res) => {
    const response = await fileServices.uploadPostFile(req);
    return res.status(response.statusCode).send(response);
  });
