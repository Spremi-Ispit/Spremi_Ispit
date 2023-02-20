export const initialState = {
  loading: false,
  error: null,
};

const getState = () => {
  if (localStorage.getItem('profile')) {
    const state = JSON.parse(localStorage.getItem('profile'));
    return state;
  } else return initialState;
};

export default getState();
