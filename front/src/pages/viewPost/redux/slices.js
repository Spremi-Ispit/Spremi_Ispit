import { createSlice } from '@reduxjs/toolkit';
import {
  commentsReducer,
  actions as commentActions,
} from '../components/comments/redux/slices';
import comments from '../components/comments/redux/state';
import {
  postReducer,
  actions as postActions,
} from '../components/post/redux/slices';
import post from '../components/post/redux/state';
import state from './state';

const viewPostSlice = createSlice({
  name: 'viewPost',
  initialState: {
    ...state,
    comments,
    post,
  },
  reducers: {
    setShowAttachments: (state, action) => {
      state.showAttachments = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setTags: (state, action) => {
      state.tags = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(commentActions.setComments, (state, action) => {
      state.comments = commentsReducer(state.comments, action);
    });
    builder.addCase(commentActions.setError, (state, action) => {
      state.comments = commentsReducer(state.comments, action);
    });
    builder.addCase(commentActions.setLoading, (state, action) => {
      state.comments = commentsReducer(state.comments, action);
    });
    builder.addCase(postActions.setPost, (state, action) => {
      state.post = postReducer(state.post, action);
    });
    builder.addCase(postActions.setLoading, (state, action) => {
      state.post = postReducer(state.post, action);
    });
    builder.addCase(postActions.setError, (state, action) => {
      state.post = postReducer(state.post, action);
    });
  },
});

export const viewPostReducer = viewPostSlice.reducer;
export const { setShowAttachments, setTags, setLoading, setError } = viewPostSlice.actions;
