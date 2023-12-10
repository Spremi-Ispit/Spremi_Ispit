import services from '../../utils/services';
import { formatDate } from '../../utils/dateFormater';

export const loadPostsForHomepageFilters = async (
  urlSearch,
  urlOrder,
  urlYearOfStudy,
  urlDepartment,
  urlExaminationPeriod,
  urlSubject,
  urlType,
  urlYearOfExam,
  currentPage,
  postPerPage
) => {
  let startIndex = undefined;
  if (currentPage && postPerPage) {
    startIndex = (currentPage - 1) * postPerPage;
  }

  let count = undefined;
  if (postPerPage) {
    count = postPerPage;
  }

  let data = {
    startIndex,
    count,
    search: urlSearch,
    order: urlOrder,
    yearOfStudy: urlYearOfStudy,
    department: urlDepartment,
    examinationPeriod: urlExaminationPeriod,
    subject: urlSubject,
    type: urlType,
    yearOfExam: urlYearOfExam,
  };

  const response = await services.post('/posts/postsForHomepageFilters', data);
  return mapDTOToData(response);
};

function mapDTOToData(data) {
  return {
    posts: mapDTOToPosts(data.posts),
    totalNumberOfPages: data.totalNumberOfPages,
    totalNumberOfPosts: data.totalNumberOfPosts,
  };
}

function mapDTOToPost(dto) {
  return {
    ...dto,
    date: formatDate(new Date(dto.date)),
  };
}

function mapDTOToPosts(dto) {
  return dto.map((post) => mapDTOToPost(post));
}
