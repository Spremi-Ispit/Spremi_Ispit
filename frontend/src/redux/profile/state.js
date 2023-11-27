import {
  keys,
  localStorageManager,
} from '../../utils/managers/LocalStorageManager';

export const profileView = {
  posts: 'posts',
  commentedPosts: 'commentedPosts',
  reportedPosts: 'reportedPosts',
  reportedComments: 'reportedComments',
  personalData: 'personalData',
};

export const initialState = {
  profileView: profileView.posts,
  sideNavbarHidden: false,
};

export default localStorageManager.getState(keys.profile) ?? initialState;
