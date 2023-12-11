import {
  keys,
  localStorageManager,
} from '../../utils/managers/LocalStorageManager';

const initialState = {
  filters: {
    visible: true,
  },
};

export default localStorageManager.getState(keys.home) ?? initialState;
