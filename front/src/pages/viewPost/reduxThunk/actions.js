import {
  setComments,
  setLoading as setLoadingComment,
  setError as setErrorComment,
} from '../components/comments/redux/slices';
import {
  setPost,
  setLoading as setLoadingPost,
  setError as setErrorPost,
} from '../components/post/redux/slices';
import serialize from '../../../utils/serialize';
import {
  getCommentsRepository,
  addCommentRepository,
  addCommentLikeRepository,
  removeCommentLikeRepository,
  addCommentDislikeRepository,
  removeCommentDislikeRepository,
  deleteCommentRepository,
  reportCommentRepository,
} from '../repository/comments';
import {
  addPostDislikeRepository,
  addPostLikeRepository,
  deletePostRepository,
  getPostRepository,
  loadPostForHomepageFiltersRepository,
  removePostDislikeRepository,
  removePostLikeRepository,
  reportPostRepository,
} from '../repository/post';
import { getAllTagsRepository } from '../repository/tags';
import { setTags, setError, setLoading } from '../redux/slices';

export const loadComments = (postId) => async (dispatch, getState) => {
  try {
    dispatch(setLoadingComment(true));
    const comments = await getCommentsRepository(postId);
    dispatch(setComments(comments));
  } catch (err) {
    dispatch(setErrorComment(serialize(err)));
  } finally {
    dispatch(setLoadingComment(false));
  }
};

export const loadPost = (postId) => async (dispatch, getState) => {
  try {
    dispatch(setLoadingPost(true));
    const post = await getPostRepository(postId);
    dispatch(setPost(post));
  } catch (err) {
    dispatch(setErrorPost(serialize(err)));
  } finally {
    dispatch(setLoadingPost(false));
  }
};

export const addComment =
  (setError, setLoading, comment, postID, setUploadProgress) =>
  async (dispatch, getState) => {
    try {
      setLoading(true);
      await addCommentRepository(comment, setUploadProgress);
      dispatch(loadComments(postID));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const loadPostForHomepageFilters =
  (selectedPostIndex, homepageFilters, clb) => async (dispatch, getState) => {
    const {
      selectedTags: selectedTagsNames,
      type,
      search,
      order,
    } = homepageFilters;

    const {
      viewPost: { tags },
    } = getState();

    const selectedTags = selectedTagsNames
      ? tags.filter((tag) => selectedTagsNames.includes(tag.tag))
      : [];

    let dto = {
      tags: selectedTags ? selectedTags.map((tag) => tag.id) : [],
      startIndex: selectedPostIndex, // redni_broj_strane===redni_broj_posta, kada je broj postova po strani===1
      count: 1, //1 post po stranici
      search: search ? search : '',
      type: type ? type : '',
      order: order ? order : '',
    };

    try {
      dispatch(setLoadingPost(true));
      const { post } = await loadPostForHomepageFiltersRepository(dto);
      dispatch(setPost(post));
      clb(post.id);
    } catch (err) {
      dispatch(setErrorPost(serialize(err)));
    } finally {
      dispatch(setLoadingPost(false));
    }
  };

export const addPostLike =
  (postID, setError, setLoading, setLikeDislikeStatus, setLikes) =>
  async (dispatch, getState) => {
    const DTO = {
      postID,
    };

    try {
      setLoading(true);
      const status = await addPostLikeRepository(DTO);
      setLikeDislikeStatus(status);
      setLikes((prev) => Number(prev) + 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const removePostLike =
  (postID, setError, setLoading, setLikeDislikeStatus, setLikes, clb) =>
  async (dispatch, getState) => {
    const DTO = {
      postID,
    };

    try {
      setLoading(true);
      const status = await removePostLikeRepository(DTO);
      setLikeDislikeStatus(status);
      setLikes((prev) => Number(prev) - 1);
      if (clb) clb();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const addPostDislike =
  (postID, setError, setLoading, setLikeDislikeStatus, setDislikes) =>
  async (dispatch, getState) => {
    const DTO = {
      postID,
    };

    try {
      setLoading(true);
      const status = await addPostDislikeRepository(DTO);
      setLikeDislikeStatus(status);
      setDislikes((prev) => Number(prev) + 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const removePostDislike =
  (postID, setError, setLoading, setLikeDislikeStatus, setDislikes, clb) =>
  async (dispatch, getState) => {
    const DTO = {
      postID,
    };

    try {
      setLoading(true);
      const status = await removePostDislikeRepository(DTO);
      setLikeDislikeStatus(status);
      setDislikes((prev) => Number(prev) - 1);
      if (clb) clb();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const addCommentLike =
  (commentID, setError, setLoading, setLikeDislikeStatus, setLikes) =>
  async (dispatch, getState) => {
    const DTO = {
      commentID,
    };

    try {
      setLoading(true);
      const status = await addCommentLikeRepository(DTO);
      setLikeDislikeStatus(status);
      setLikes((prev) => Number(prev) + 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const removeCommentLike =
  (commentID, setError, setLoading, setLikeDislikeStatus, setLikes, clb) =>
  async (dispatch, getState) => {
    const DTO = {
      commentID,
    };

    try {
      setLoading(true);
      const status = await removeCommentLikeRepository(DTO);
      setLikeDislikeStatus(status);
      setLikes((prev) => Number(prev) - 1);
      if (clb) clb();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const addCommentDislike =
  (commentID, setError, setLoading, setLikeDislikeStatus, setDislikes) =>
  async (dispatch, getState) => {
    const DTO = {
      commentID,
    };

    try {
      setLoading(true);
      const status = await addCommentDislikeRepository(DTO);
      setLikeDislikeStatus(status);
      setDislikes((prev) => Number(prev) + 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const removeCommentDislike =
  (commentID, setError, setLoading, setLikeDislikeStatus, setDislikes, clb) =>
  async (dispatch, getState) => {
    const DTO = {
      commentID,
    };

    try {
      setLoading(true);
      const status = await removeCommentDislikeRepository(DTO);
      setLikeDislikeStatus(status);
      setDislikes((prev) => Number(prev) - 1);
      if (clb) clb();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const deletePost =
  (postID, setLoading, setError, clb) => async (dispatch, getState) => {
    try {
      setLoading(true);
      await deletePostRepository(postID);
      clb();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const reportPost =
  (postID, setLoading, setError) => async (dispatch, getState) => {
    const DTO = {
      postID,
    };

    try {
      setLoading(true);
      await reportPostRepository(DTO);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const deleteComment =
  (commentID, setLoading, setError) => async (dispatch, getState) => {
    try {
      setLoading(true);
      await deleteCommentRepository(commentID);

      const {
        viewPost: {
          comments: { comments },
        },
      } = getState();

      dispatch(
        setComments(comments.filter((comment) => comment.id !== commentID))
      );
    } catch (err) {
      setError(serialize(err));
    } finally {
      setLoading(false);
    }
  };

export const reportComment =
  (commentID, setLoading, setError) => async (dispatch, getState) => {
    const DTO = {
      commentID,
    };

    try {
      setLoading(true);
      await reportCommentRepository(DTO);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

export const loadAllTags = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const tags = await getAllTagsRepository();
    dispatch(setTags(tags));
  } catch (err) {
    dispatch(setError(serialize(err)));
  } finally {
    dispatch(setLoading(false));
  }
};
