import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export const allowedUrlParams = {
  order: 'order',
  yearOfStudy: 'yearOfStudy',
  department: 'department',
  subject: 'subject',
  type: 'type',
  search: 'search',
  examinationPeriod: 'examinationPeriod',
  yearOfExam: 'yearOfExam',
  postId: 'postId',
  username: 'username',
  commentedPosts: 'commentedPosts',
};

class UrlManager {
  #searchParams;
  #setSearchParams;
  #navigate;
  #location;

  constructor(searchParams, setSearchParams, navigate, location) {
    this.#searchParams = searchParams;
    this.#setSearchParams = setSearchParams;
    this.#navigate = navigate;
    this.#location = location;
  }

  updateUrlParam(key, value) {
    const updatedSearchParamsString = this.#manyParamsString([{ key, value }]);
    this.#update(updatedSearchParamsString, false);
  }

  updateUrlParamAndReplaceLastHistoryEntry(key, value) {
    const updatedSearchParamsString = this.#manyParamsString([{ key, value }]);
    this.#update(updatedSearchParamsString, true);
  }

  updateUrlParams(urlParams) {
    const updatedSearchParamsString = this.#manyParamsString(urlParams);
    this.#update(updatedSearchParamsString, false);
  }

  updateUrlParamsAndReplaceLastHistoryEntry(urlParams) {
    const updatedSearchParamsString = this.#manyParamsString(urlParams);
    this.#update(updatedSearchParamsString, true);
  }

  getParams() {
    const urlOrder = this.#searchParams.get(allowedUrlParams.order);
    const urlYearOfStudy = this.#searchParams.get(allowedUrlParams.yearOfStudy);
    const urlDepartment = this.#searchParams.get(allowedUrlParams.department);
    const urlSubject = this.#searchParams.get(allowedUrlParams.subject);
    const urlType = this.#searchParams.get(allowedUrlParams.type);
    const urlSearch = this.#searchParams.get(allowedUrlParams.search);
    const urlExaminationPeriod = this.#searchParams.get(
      allowedUrlParams.examinationPeriod
    );
    const urlYearOfExam = this.#searchParams.get(allowedUrlParams.yearOfExam);
    const urlPostId = this.#searchParams.get(allowedUrlParams.postId);
    const urlUsername = this.#searchParams.get(allowedUrlParams.username);
    const urlCommentedPosts = this.#searchParams.get(
      allowedUrlParams.commentedPosts
    );

    return {
      urlOrder,
      urlYearOfStudy,
      urlDepartment,
      urlSubject,
      urlType,
      urlSearch,
      urlExaminationPeriod,
      urlYearOfExam,
      urlPostId,
      urlUsername,
      urlCommentedPosts,
    };
  }

  //------------------HELPER METHODS------------------
  #update(updatedSearchParamsString, replaceLastHistoryEntry) {
    if (replaceLastHistoryEntry) {
      this.#navigate(
        {
          pathname: this.#location.pathname,
          search: `${updatedSearchParamsString}`,
        },
        {
          replace: true,
        }
      );
    } else {
      this.#setSearchParams(new URLSearchParams(updatedSearchParamsString));
    }
  }

  #manyParamsString(urlParams) {
    let searchParams = new URLSearchParams(this.#searchParams.toString());

    urlParams.forEach((param) => {
      const searchParamsString = this.#oneParamString(
        param.key,
        param.value,
        searchParams
      );
      searchParams = new URLSearchParams(searchParamsString);
    });

    return searchParams.toString();
  }

  #oneParamString(key, value, searchParams) {
    const isEmptyArray = Array.isArray(value) && value.length === 0;
    const isEmptyString = !String(value).trim();

    if (
      value === null ||
      value === undefined ||
      isEmptyString ||
      isEmptyArray
    ) {
      searchParams.delete(key);
      return searchParams.toString();
    }

    searchParams.set(key, value);
    return searchParams.toString();
  }
}

export const useUrlManager = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const urlManager = new UrlManager(
    searchParams,
    setSearchParams,
    navigate,
    location
  );

  return urlManager;
};
