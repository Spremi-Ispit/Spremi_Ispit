import { createSlice } from '@reduxjs/toolkit';
import {
  tagsReducer,
  actions as tagActions,
} from '../components/filters/components/tags/redux/slices';
import tags from '../components/filters/components/tags/redux/state';
import state from './state';
import {
  postsReducer,
  actions as postActions,
} from '../components/posts/redux/slices';
import posts from '../components/posts/redux/state';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    ...state,
    tags,
    posts,
  },
  reducers: {
    setFiltersVisibility: (state, action) => {
      state.filtersVisibility = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPostPerPage: (state, action) => {
      state.postPerPage = action.payload;
    },
    setTotalNumberOfPages: (state, action) => {
      state.totalNumberOfPages = action.payload;
    },
    setTotalNumberOfPosts: (state, action) => {
      state.totalNumberOfPosts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(tagActions.setSelectedTags, (state, action) => {
      state.tags = tagsReducer(state.tags, action);
    });
    builder.addCase(tagActions.setLoading, (state, action) => {
      state.tags = tagsReducer(state.tags, action);
    });
    builder.addCase(tagActions.setAllTags, (state, action) => {
      state.tags = tagsReducer(state.tags, action);
    });
    builder.addCase(tagActions.setError, (state, action) => {
      state.tags = tagsReducer(state.tags, action);
    });
    builder.addCase(postActions.setLoading, (state, action) => {
      state.posts = postsReducer(state.posts, action);
    });
    builder.addCase(postActions.setError, (state, action) => {
      state.posts = postsReducer(state.posts, action);
    });
    builder.addCase(postActions.setPosts, (state, action) => {
      state.posts = postsReducer(state.posts, action);
    });
  },
});

export const {
  setFiltersVisibility,
  setType,
  setSearch,
  setOrder,
  setCurrentPage,
  setPostPerPage,
  setTotalNumberOfPages,
  setTotalNumberOfPosts,
} = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
