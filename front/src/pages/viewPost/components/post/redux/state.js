const initialState = {
  loading: true,
  error: null,
  post: null,
};

const getState = () => {
  if (localStorage.getItem('viewPost')) {
    const state = JSON.parse(localStorage.getItem('viewPost'));
    return state.post;
  } else return initialState;
};

export default getState();
