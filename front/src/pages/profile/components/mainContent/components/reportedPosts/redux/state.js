export const orderEnum = {
  newest: 'newest',
  like: 'like',
  dislike: 'dislike',
};

export const initialState = {
  loading: false,
  error: null,
  posts: [],
  order: orderEnum.newest,
};

const getState = () => {
  if (localStorage.getItem('profile')) {
    const state = JSON.parse(localStorage.getItem('profile'));
    return state.posts;
  } else return initialState;
};

export default getState();
