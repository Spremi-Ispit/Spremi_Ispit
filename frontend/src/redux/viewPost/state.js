import {
  keys,
  localStorageManager,
} from '../../utils/managers/LocalStorageManager';

const initialState = {
  postLoading: false,
  commentsLoading: false,
};

export default localStorageManager.getState(keys.viewPost) ?? initialState;
