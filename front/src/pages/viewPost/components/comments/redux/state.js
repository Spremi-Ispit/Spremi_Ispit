const initialState = {
  loading: true,
  error: null,
  comments: [],
};

const getState = () => {
  if (localStorage.getItem('viewPost')) {
    const state = JSON.parse(localStorage.getItem('viewPost'));
    return state.comments;
  } else return initialState;
};

export default getState();
