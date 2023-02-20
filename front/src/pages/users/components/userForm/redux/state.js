export const initialState = {
  loading: false,
  error: null,
  allUsers: [],
  user: null,
  role: null,
};

const getState = () => {
  if (localStorage.getItem('users')) {
    const state = JSON.parse(localStorage.getItem('users'));
    return state.userForm;
  } else return initialState;
};

export default getState();
