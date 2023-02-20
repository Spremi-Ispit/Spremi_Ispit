export const initialState = {
  loading: false,
  error: null,
  updateTags: false,
  tags: [{ id: -1, tag: 'none' }],
};

const getState = () => {
  if (localStorage.getItem('tags')) {
    const state = JSON.parse(localStorage.getItem('tags'));
    return state;
  } else return initialState;
};

export default getState();
