// @ts-nocheck
import { authorizeUserOnApiRequest } from './authorizeUserOnApiRequest';
import { userRole } from '../utils/enums';
import { User } from '../entities/User';
import response from '../utils/response';

export const authorizeAdminOnApiRequest = async (req, res, next) => {
  authorizeUserOnApiRequest(req, res, async (err) => {
    const { userId } = req.body;

    const user = await User.findOne({
      where: { id: userId }
    });

    if (user?.role === userRole.admin) {
      next();
    } else {
      return response.BAD_REQUEST(`Invalid request`);
    }
  });
};
