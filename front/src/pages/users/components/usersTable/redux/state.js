export const initialState = {
  loading: false,
  error: null,
  users: [],
};

const getState = () => {
  if (localStorage.getItem('users')) {
    const state = JSON.parse(localStorage.getItem('users'));
    return state.usersTable;
  } else return initialState;
};

export default getState();
