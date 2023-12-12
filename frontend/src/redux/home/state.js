import {
  keys,
  localStorageManager,
} from '../../utils/managers/LocalStorageManager';

const initialState = {
  //add prev url params so when go back page, it loads from url
};

export default localStorageManager.getState(keys.home) ?? initialState;
