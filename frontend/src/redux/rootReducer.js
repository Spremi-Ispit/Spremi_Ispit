import { appSlice } from './app/slice';
import { homeSlice } from './home/slice';
import { profileSlice } from './profile/slice';
import { usersSlice } from './users/slice';
import { viewPostSlice } from './viewPost/slice';

const rootReducer = {
  app: appSlice.reducer,
  home: homeSlice.reducer,
  profile: profileSlice.reducer,
  viewPost: viewPostSlice.reducer,
  users: usersSlice.reducer,
};

export default rootReducer;
