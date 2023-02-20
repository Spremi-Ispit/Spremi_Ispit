import services from '../../../services/index';
import { formatDate } from '../../../utils/dateFormater';

export const getPostRepository = async (postId) => {
  const dto = await services.get(`/posts/postId/${postId}`);
  if (dto.data) {
    return mapDTOToPost(dto.data);
  } else {
    throw new Error(
      'There are no posts.' +
        'If you see a post after closing this dialog, that post is ' +
        'probbably deleted and you see post from your cache.'
    );
  }
};

export const mapDTOToPost = (dto) => {
  return {
    ...dto,
    type: dto.type === 'question' ? 'pitanje' : 'materijal',
    date: formatDate(new Date(dto.date)),
  };
};

export const mapDTOToPosts = (dto) => {
  return dto.map((post) => mapDTOToPost(post));
};

export const loadPostForHomepageFiltersRepository = async (data) => {
  const dto = await services.post('/posts/postsForHomepageFilters', data);

  if (dto.data.posts.length > 0) {
    return {
      post: mapDTOToPost(dto.data.posts[0]),
      //These two are also returned, but not used
      // totalNumberOfPages: dto.data.totalNumberOfPages,
      // totalNumberOfPosts: dto.data.totalNumberOfPosts,
    };
  } else {
    throw new Error(
      'There are no posts, go back to home page and check filters.' +
        'If you see a post after closing this dialog, that post is ' +
        'probbably deleted and you see post from your cache.'
    );
  }
};

export const addPostLikeRepository = async (data) => {
  const dto = await services.post('/posts/like', data);
  return dto.data;
};

export const removePostLikeRepository = async (data) => {
  const dto = await services.delete('/posts/like', data);
  return dto.data;
};

export const addPostDislikeRepository = async (data) => {
  const dto = await services.post('/posts/dislike', data);
  return dto.data;
};

export const removePostDislikeRepository = async (data) => {
  const dto = await services.delete('/posts/dislike', data);
  return dto.data;
};

export const deletePostRepository = async (postId) => {
  const dto = await services.delete(`/posts/postId/${postId}`);
  return dto.data;
};

export const reportPostRepository = async (DTO) => {
  const dto = await services.post(`/posts/report`, DTO);
  return dto.data;
};
