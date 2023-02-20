import { loadPostsForHomepageFiltersRepository } from '../repository/posts';
import { getAllTagsRepository } from '../repository/tags';
import {
  setAllTags,
  setLoading as setLoadingAllTags,
  setError as setErrorAllTags,
} from '../components/filters/components/tags/redux/slices';
import {
  setPosts,
  setLoading as loadingPosts,
  setError as setErrorPosts,
} from '../components/posts/redux/slices';
import serialize from '../../../utils/serialize';
import { setTotalNumberOfPages, setTotalNumberOfPosts } from '../redux/slices';

export const loadPostsForHomepageFilters = () => async (dispatch, getState) => {
  const {
    home: {
      tags: { selectedTags },
      type,
      search,
      currentPage,
      postPerPage,
      order,
    },
  } = getState();

  let tagsId = selectedTags.map((tag) => tag.id);
  let dto = {
    tags: tagsId,
    startIndex: (currentPage - 1) * postPerPage,
    count: postPerPage,
    search,
    type,
    order,
  };
  try {
    dispatch(loadingPosts(true));
    const { posts, totalNumberOfPages, totalNumberOfPosts } =
      await loadPostsForHomepageFiltersRepository(dto);

    dispatch(setPosts(posts));
    dispatch(setTotalNumberOfPages(totalNumberOfPages));
    dispatch(setTotalNumberOfPosts(totalNumberOfPosts));
  } catch (err) {
    dispatch(setErrorPosts(serialize(err)));
  } finally {
    dispatch(loadingPosts(false));
  }
};

export const loadAllTags = () => async (dispatch, getState) => {
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
