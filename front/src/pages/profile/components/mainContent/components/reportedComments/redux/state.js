export const initialState = {
  loading: false,
  error: null,
  comments: [],
};

const getState = () => {
  if (localStorage.getItem('profile')) {
    const state = JSON.parse(localStorage.getItem('profile'));
    return state.comments;
  } else return initialState;
};

export default getState();
