// @ts-nocheck
import { IsNull, Not } from 'typeorm';
import { Post } from '../../entities/Post';
import response from '../../utils/response';
import { getPostById } from './getPostById';
import HttpStatus from '../../utils/response/httpStatus';

export const getReportedPosts = async (req) => {
  const reportedPosts = await Post.find({
    where: {
      reportedBy: [{ id: Not(IsNull()) }]
    },
    select: {
      id: true
    }
  });

  const postsToReturn = [];

  for (const reportedPost of reportedPosts) {
    req.params.id = reportedPost.id;
    const response = await getPostById(req);

    if (response.httpStatus === HttpStatus.OK.status) {
      postsToReturn.push(response.response);
    }
  }

  return response.OK(postsToReturn);
};
