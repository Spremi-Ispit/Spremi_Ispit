export const initialState = {
  showAttachments: true,
  loading: true,
  error: null,
  tags: [],
};

const getState = () => {
  if (localStorage.getItem('viewPost')) {
    const state = JSON.parse(localStorage.getItem('viewPost'));

    delete state.comments;
    delete state.post;

    return state;
  } else return initialState;
};

export default getState();
