// @ts-nocheck
import response from '../../utils/response';

export const checkFilesPayload = async (req, res) => {
  await new Promise((resolve, reject) => {
    if (!req.files) {
      reject(response.BAD_REQUEST('Missing files'));
    }

    resolve();
  });
};
