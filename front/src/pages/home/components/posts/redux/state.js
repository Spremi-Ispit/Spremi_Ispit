export const initialState = {
  loading: false,
  error: null,
  posts: [],
};

const getState = () => {
  if (localStorage.getItem('home')) {
    const state = JSON.parse(localStorage.getItem('home'));
    return state.posts;
  } else return initialState;
};

export default getState();
