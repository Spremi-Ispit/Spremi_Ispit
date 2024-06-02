import { appSlice } from './app/slice';
import { profileSlice } from './profile/slice';
import { usersSlice } from './users/slice';
import { viewPostSlice } from './viewPost/slice';

const rootReducer = {
  app: appSlice.reducer,
  profile: profileSlice.reducer,
  viewPost: viewPostSlice.reducer,
  users: usersSlice.reducer,
};

export default rootReducer;
