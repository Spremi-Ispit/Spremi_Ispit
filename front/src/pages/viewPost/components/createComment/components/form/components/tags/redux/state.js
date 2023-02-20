export const initialState = {
  loading: false,
  error: null,
  selectedTags: [],
  allTags: [],
};

const getState = () => {
  if (localStorage.getItem('home')) {
    const state = JSON.parse(localStorage.getItem('home'));
    return state.tags;
  } else return initialState;
};

export default getState();
