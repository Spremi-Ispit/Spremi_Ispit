import { loginReducer } from '../../pages/login/redux/slices';
import { registerReducer } from '../../pages/register/redux/slices';
import { homeReducer } from '../../pages/home/redux/slices';
import { createPostReducer } from '../../pages/createPost/redux/slices';
import { appReducer } from '../redux/slices';
import { tagsReducer } from '../../pages/tags/redux/slices';
import { profileReducer } from '../../pages/profile/redux/slices';
import { usersReducer } from '../../pages/users/redux/slices';
import { viewPostReducer } from '../../pages/viewPost/redux/slices';

const rootReducer = {
  app: appReducer,
  home: homeReducer,
  createPost: createPostReducer,
  login: loginReducer,
  register: registerReducer,
  tags: tagsReducer,
  profile: profileReducer,
  users: usersReducer,
  viewPost: viewPostReducer,
};

export default rootReducer;
