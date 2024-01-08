// @ts-nocheck
import response from '../../utils/response';
import { extractFiles } from './extractFiles';

const checkFilesCount = async (req, res) => {
  await new Promise((resolve, reject) => {
    const { docs, images, videos } = extractFiles(req);

    if (images.length > 10) {
      reject(response.BAD_REQUEST("Images number can't be greater than 10"));
    }

    if (docs.length > 10) {
      reject(response.BAD_REQUEST("Documents number can't be greater than 10"));
    }

    if (videos.length > 3) {
      reject(response.BAD_REQUEST("Videos number can't be greater than 3"));
    }

    resolve();
  });
};

export default checkFilesCount;
