export const initialState = {
  loading: false,
  error: null,
};

const getState = () => {
  if (localStorage.getItem('createPost')) {
    const state = JSON.parse(localStorage.getItem('createPost'));
    delete state.tags;
    return state;
  } else return initialState;
};

export default getState();
