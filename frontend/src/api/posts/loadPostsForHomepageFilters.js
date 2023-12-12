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
    postId,
  };

  return await services.post('/posts/postsForHomepageFilters', data);
};
