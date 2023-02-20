export const initialState = {
  loading: false,
  error: null,
  selectedTags: [],
  allTags: [],
};

const getState = () => {
  if (localStorage.getItem('createPost')) {
    const state = JSON.parse(localStorage.getItem('createPost'));
    return state.tags;
  } else return initialState;
};

export default getState();
