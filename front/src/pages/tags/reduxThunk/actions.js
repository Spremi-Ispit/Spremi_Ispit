import {
  getAllTagsRepository,
  createTagRepository,
  deleteTagRepository,
} from '../repository/tags';
import { setError, setLoading, setTags } from '../redux/slices';
import state from '../redux/state';
import serialize from '../../../utils/serialize';

export const loadTags = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const tags = await getAllTagsRepository();
    dispatch(setTags([state.tags[0], ...tags]));
  } catch (err) {
    dispatch(setError(serialize(err)));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteTag = (tag) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const deletedId = await deleteTagRepository(tag);

    const {
      tags: { tags: prevTags },
    } = getState();

    const updatedTags = prevTags.filter((prevTag) => prevTag.id !== deletedId);
    dispatch(setTags(updatedTags));
  } catch (err) {
    dispatch(setError(serialize(err)));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addTag = (tag) => async (dispatch, getState) => {
  let DTO = {
    tag: tag,
  };

  try {
    dispatch(setLoading(true));
    const createdTag = await createTagRepository(DTO);

    const {
      tags: { tags: prevTags },
    } = getState();

    dispatch(setTags([...prevTags, createdTag]));
  } catch (err) {
    dispatch(setError(serialize(err)));
  } finally {
    dispatch(setLoading(false));
  }
};
