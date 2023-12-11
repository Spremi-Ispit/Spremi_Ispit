import { createSlice } from '@reduxjs/toolkit';
import state from './state';

export const homeSlice = createSlice({
  name: 'home',
  initialState: state,
  reducers: {
    setFiltersVisible: (state, action) => {
      state.filters.visible = action.payload;
    },
  },
});
