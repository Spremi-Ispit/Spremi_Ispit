import {
  setAllTags,
  setLoading as setLoadingAllTags,
  setError as setErrorAllTags,
} from '../components/form/components/tags/redux/slices';
import serialize from '../../../utils/serialize';
import { getAllTagsRepository } from '../repository/tags';
import { setLoading, setError } from '../redux/slices';
import { createPostRepository } from '../repository/post';

export const addPost =
  (post, clb, setUploadProgress) => async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      await createPostRepository(post, setUploadProgress);
      clb();
    } catch (err) {
      dispatch(setError(serialize(err)));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const loadTags = () => async (dispatch, getState) => {
  try {
    dispatch(setLoadingAllTags(true));
    const tags = await getAllTagsRepository();
    dispatch(setAllTags(tags));
  } catch (err) {
    dispatch(setErrorAllTags(serialize(err)));
  } finally {
    dispatch(setLoadingAllTags(false));
  }
};
