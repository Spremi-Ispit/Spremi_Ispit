import { commentedPosts } from '../../pages/home/components/Filters/components/CommentedPosts';
import services from '../../utils/services';

export const loadPostsForHomepageFilters = async (
  urlSearch,
  urlOrder,
  urlYearOfStudy,
  urlDepartment,
  urlExaminationPeriod,
  urlSubject,
  urlType,
  urlYearOfExam,
  urlCommentedPosts,
  postId
) => {
  let data = {
    search: urlSearch,
    order: urlOrder,
    yearOfStudy: urlYearOfStudy,
    department: urlDepartment,
    examinationPeriod: urlExaminationPeriod,
    subject: urlSubject,
    type: urlType,
    yearOfExam: urlYearOfExam,
    commentedPosts: urlCommentedPosts === commentedPosts.true,
    postId,
  };

  return await services.post('/posts/postsForHomepageFilters', data);
};
