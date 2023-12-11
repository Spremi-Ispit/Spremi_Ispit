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
  post
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
    post,
  };

  return await services.post('/posts/postsForHomepageFilters', data);
};
