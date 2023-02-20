export const initialState = {
  loading: false,
  error: null,
};

const getState = () => {
  if (localStorage.getItem('register')) {
    const state = JSON.parse(localStorage.getItem('register'));
    return state;
  } else return initialState;
};

export default getState();
