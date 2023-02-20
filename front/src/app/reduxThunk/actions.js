import { loading } from '../redux/app/slices';

export const loadApp = () => async (dispatch, getState) => {
  dispatch(loading(true));
  dispatch(loading(false));
};
