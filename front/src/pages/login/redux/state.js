export const initialState = {
  loading: false,
  error: null,
};

const getState = () => {
  if (localStorage.getItem('login')) {
    const state = JSON.parse(localStorage.getItem('login'));
    return state;
  } else return initialState;
};

export default getState();
