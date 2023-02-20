import {
  setLoading as setLoadingPosts,
  setError as setErrorPosts,
  setPosts,
} from '../components/mainContent/components/posts/redux/slices';
import {
  dismissReportRepository,
  loadReportedPostsRepository,
  loadUserPostsRepository,
} from '../repository/posts';
import serialize from '../../../utils/serialize';
import {
  loadReportedCommentsRepository,
  dismissCommentReportRepository,
} from '../repository/comments';
import {
  setComments,
  setLoading as setLoadingComments,
  setError as setErrorComments,
} from '../components/mainContent/components/reportedComments/redux/slices';
import {
  loadUserInfoRepository,
  changeAccountPasswordRepository,
  changeAccountUsernameRepository,
  unbanUserAccountRepository,
  banUserAccountRepository,
  blacklistUserAccountRepository,
} from '../repository/user';
import { setToken, setUsername } from '../../../app/redux/slices';

export const loadUserPosts = (username) => async (dispatch, getState) => {
  try {
    dispatch(setLoadingPosts(true));
    const posts = await loadUserPostsRepository(username);
    dispatch(setPosts(posts));
  } catch (err) {
    setErrorPosts(serialize(err));
  } finally {
    dispatch(setLoadingPosts(false));
  }
};

export const loadReportedPosts = () => async (dispatch, getState) => {
  try {
    dispatch(setLoadingPosts(true));
    const posts = await loadReportedPostsRepository();
    dispatch(setPosts(posts));
  } catch (err) {
    setErrorPosts(serialize(err));
  } finally {
    dispatch(setLoadingPosts(false));
  }
};

export const loadReportedComments = () => async (dispatch, getState) => {
  try {
    dispatch(setLoadingComments(true));
    const comments = await loadReportedCommentsRepository();
    dispatch(setComments(comments));
  } catch (err) {
    setErrorComments(serialize(err));
  } finally {
    dispatch(setLoadingComments(false));
  }
};

export const dismissPostReport =
  (postId, reportedById, setLoading, setError) =>
  async (dispatch, getState) => {
    try {
      setLoading(true);
      await dismissReportRepository(postId, reportedById);
      dispatch(loadReportedPosts());
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const dismissCommentReport =
  (commentId, setLoading, setError) => async (dispatch, getState) => {
    try {
      setLoading(true);
      await dismissCommentReportRepository(commentId);
      dispatch(loadReportedComments());
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const loadUserInfo =
  (username, setUser, setLoading, setError) => async (dispatch, getState) => {
    try {
      setLoading(true);
      const user = await loadUserInfoRepository(username);
      setUser(user);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const changeAccountPassword =
  (newPassword, confirmedPassword, email, setLoading, setError, clb) =>
  async (dispatch, getState) => {
    try {
      setLoading(true);
      const user = await changeAccountPasswordRepository(
        newPassword,
        confirmedPassword,
        email
      );
      dispatch(setToken(user.token));
      clb();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const changeAccountUsername =
  (newUsername, confirmedPassword, email, setLoading, setError, clb) =>
  async (dispatch, getState) => {
    try {
      setLoading(true);
      const user = await changeAccountUsernameRepository(
        newUsername,
        confirmedPassword,
        email
      );

      dispatch(setToken(user.token));
      dispatch(setUsername(user.username));
      clb(user.username);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const banUserAccount =
  (banUserid, setLoading, setError, clb) => async (dispatch, getState) => {
    try {
      setLoading(true);
      await banUserAccountRepository(banUserid);

      clb();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const unbanUserAccount =
  (unbanUserid, setLoading, setError, clb) => async (dispatch, getState) => {
    try {
      setLoading(true);
      await unbanUserAccountRepository(unbanUserid);

      clb();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const blacklistUser =
  (blacklistUserId, email, setLoading, setError, clb) =>
  async (dispatch, getState) => {
    try {
      setLoading(true);
      await blacklistUserAccountRepository(blacklistUserId, email);

      clb();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
