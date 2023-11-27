import {
  keys,
  localStorageManager,
} from '../../utils/managers/LocalStorageManager';

const initialState = {
  filters: {
    visible: true,
  },
  pagination: {
    currentPage: 1,
    postPerPage: 5,
    totalNumberOfPages: null,
    totalNumberOfPosts: null,
  },
};

export default localStorageManager.getState(keys.home) ?? initialState;
